import { NextRequest, NextResponse } from "next/server";
import { getQuranFoundationConfig } from "@/lib/quran-foundation";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");

  if (error) {
    return NextResponse.json(
      {
        error: "Quran Foundation authorization failed",
        details: error,
      },
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
  const codeVerifier = request.cookies.get("qf_code_verifier")?.value;

  if (!state || !savedState || state !== savedState) {
    return NextResponse.json(
      { error: "Invalid OAuth state" },
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
    const errorText = await tokenResponse.text();

    console.error("Quran Foundation token exchange failed:", errorText);

    return NextResponse.json(
      { error: "Failed to exchange authorization code" },
      { status: 502 }
    );
  }

  const tokens = await tokenResponse.json();

  if (!tokens.access_token) {
    return NextResponse.json(
      { error: "Access token was not returned" },
      { status: 502 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Quran Foundation authentication successful",
    environment: process.env.QF_ENV || "prelive",
    authenticated: true,
    tokenReceived: true,
    expiresIn: tokens.expires_in ?? null,
    refreshTokenReceived: Boolean(tokens.refresh_token),
    idTokenReceived: Boolean(tokens.id_token),
  });
}