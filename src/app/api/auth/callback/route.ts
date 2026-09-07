import { NextRequest, NextResponse } from "next/server";
import { createSession } from "@/lib/auth-session";
import { getQuranFoundationConfig } from "@/lib/quran-foundation";
import { verifyQuranFoundationIdToken } from "@/lib/quran-foundation-oidc";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");

  if (error) {
    return NextResponse.json(
      { error: "Quran Foundation authorization failed" },
      { status: 400 }
    );
  }

  if (!code) {
    return NextResponse.json(
      { error: "Authorization code is missing" },
      { status: 400 }
    );
  }

  const savedState = request.cookies.get("qf_state")?.value;
  const savedNonce = request.cookies.get("qf_nonce")?.value;
  const codeVerifier = request.cookies.get("qf_code_verifier")?.value;

  if (!state || !savedState || state !== savedState) {
    return NextResponse.json(
      { error: "Invalid OAuth state" },
      { status: 400 }
    );
  }

  if (!savedNonce) {
    return NextResponse.json(
      { error: "OAuth nonce is missing" },
      { status: 400 }
    );
  }

  if (!codeVerifier) {
    return NextResponse.json(
      { error: "PKCE code verifier is missing" },
      { status: 400 }
    );
  }

  const config = getQuranFoundationConfig();

  const tokenParams = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: config.redirectUri,
    code_verifier: codeVerifier,
  });

  const credentials = Buffer.from(
    `${config.clientId}:${config.clientSecret}`
  ).toString("base64");

  const tokenResponse = await fetch(
    `${config.authBaseUrl}/oauth2/token`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: tokenParams.toString(),
      cache: "no-store",
    }
  );

  if (!tokenResponse.ok) {
    return NextResponse.json(
      { error: "Failed to exchange authorization code" },
      { status: 502 }
    );
  }

  const tokens = await tokenResponse.json();

  if (!tokens.access_token || !tokens.id_token) {
    return NextResponse.json(
      { error: "Required authentication tokens were not returned" },
      { status: 502 }
    );
  }

  let idToken;

  try {
    idToken = await verifyQuranFoundationIdToken(
      tokens.id_token,
      savedNonce
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid Quran Foundation ID token" },
      { status: 401 }
    );
  }

  const sessionToken = await createSession({
    sub: String(idToken.sub),
    email: idToken.email
      ? String(idToken.email)
      : undefined,
    name: idToken.name
      ? String(idToken.name)
      : undefined,
  });

  const response = NextResponse.redirect(
    new URL("/", request.url)
  );

  response.cookies.set("qf_session", sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });

  response.cookies.set("qf_state", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  response.cookies.set("qf_nonce", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  response.cookies.set("qf_code_verifier", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  return response;
}