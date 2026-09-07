import {
  createRemoteJWKSet,
  jwtVerify,
} from "jose";

import { getQuranFoundationConfig } from "@/lib/quran-foundation";

type OidcDiscovery = {
  issuer: string;
  jwks_uri: string;
};

export async function verifyQuranFoundationIdToken(
  idToken: string,
  nonce: string
) {
  const config = getQuranFoundationConfig();

  // Получаем официальную OIDC-конфигурацию
  // именно для текущего окружения (prelive/production).
  const discoveryResponse = await fetch(
    `${config.authBaseUrl}/.well-known/openid-configuration`,
    {
      cache: "no-store",
    }
  );

  if (!discoveryResponse.ok) {
    throw new Error("Failed to load OIDC discovery document");
  }

  const discovery =
    (await discoveryResponse.json()) as OidcDiscovery;

  if (!discovery.issuer || !discovery.jwks_uri) {
    throw new Error("Invalid OIDC discovery document");
  }

  const JWKS = createRemoteJWKSet(
    new URL(discovery.jwks_uri)
  );

  const { payload } = await jwtVerify(idToken, JWKS, {
    issuer: discovery.issuer,
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