import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "@/lib/auth-session";

export async function GET(request: NextRequest) {
  const session = request.cookies.get("qf_session")?.value;

  if (!session) {
    return NextResponse.json(
      {
        authenticated: false,
        user: null,
      },
      { status: 401 }
    );
  }

  try {
    const user = await verifySession(session);

    return NextResponse.json({
      authenticated: true,
      user,
    });
  } catch {
    const response = NextResponse.json(
      {
        authenticated: false,
        user: null,
      },
      { status: 401 }
    );

    response.cookies.set("qf_session", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0,
    });

    return response;
  }
}