import { createRemoteJWKSet, jwtVerify } from "jose";
import { getQuranFoundationConfig } from "@/lib/quran-foundation";

export async function verifyQuranFoundationIdToken(
  idToken: string,
  nonce: string
) {
  const config = getQuranFoundationConfig();

  const issuer = config.authBaseUrl;

  const jwks = createRemoteJWKSet(
    new URL(`${issuer}/oauth2/jwks`)
  );

  const { payload } = await jwtVerify(idToken, jwks, {
    issuer,
    audience: config.clientId,
  });

  if (payload.nonce !== nonce) {
    throw new Error("Invalid ID token nonce");
  }

  if (!payload.sub) {
    throw new Error("ID token subject is missing");
  }

  return payload;
}