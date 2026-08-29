import { NextResponse } from "next/server";
import { createHash, randomBytes } from "crypto";
import { getQuranFoundationConfig } from "@/lib/quran-foundation";

function randomString(bytes = 32) {
  return randomBytes(bytes).toString("base64url");
}

function createCodeChallenge(codeVerifier: string) {
  return createHash("sha256")
    .update(codeVerifier)
    .digest("base64url");
}

export async function GET() {
  const config = getQuranFoundationConfig();

  const state = randomString();
  const nonce = randomString();
  const codeVerifier = randomString(64);
  const codeChallenge = createCodeChallenge(codeVerifier);

  const params = new URLSearchParams({
    response_type: "code",
    client_id: config.clientId,
    redirect_uri: config.redirectUri,
    scope: "openid profile offline_access",
    state,
    nonce,
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
  });

  const authorizationUrl =
    `${config.authBaseUrl}/oauth2/auth?${params.toString()}`;

  const response = NextResponse.redirect(authorizationUrl);

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: 10 * 60,
  };

  response.cookies.set("qf_state", state, cookieOptions);
  response.cookies.set("qf_nonce", nonce, cookieOptions);
  response.cookies.set("qf_code_verifier", codeVerifier, cookieOptions);

  return response;
}