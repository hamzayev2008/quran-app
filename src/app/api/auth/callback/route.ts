import { NextRequest, NextResponse } from "next/server";
import { getQuranFoundationConfig } from "@/lib/quran-foundation";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");

  // Пользователь отменил вход
  if (error) {
    return NextResponse.json(
      {
        error: "Quran Foundation authorization failed",
        details: error,
      },
      { status: 400 }
    );
  }

  // Quran Foundation должен вернуть code
  if (!code) {
    return NextResponse.json(
      { error: "Authorization code is missing" },
      { status: 400 }
    );
  }

  // state должен совпадать с тем, который мы создали в /login
  const savedState = request.cookies.get("qf_state")?.value;

  if (!state || !savedState || state !== savedState) {
    return NextResponse.json(
      { error: "Invalid OAuth state" },
      { status: 400 }
    );
  }

  // На этом этапе пока только проверяем,
  // что Quran Foundation действительно вернул пользователя.
  const config = getQuranFoundationConfig();

  return NextResponse.json({
    success: true,
    message: "Quran Foundation authorization callback received",
    environment: "prelive",
    clientConfigured: Boolean(config.clientId),
    authorizationCodeReceived: true,
  });
}