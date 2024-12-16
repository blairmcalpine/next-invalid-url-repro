import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  if (req.nextUrl.pathname.startsWith("/broken")) {
    return NextResponse.json(
      { message: "Redirecting to /broken" },
      { status: 302, headers: { Location: "/" } }
    );
  }

  return NextResponse.next();
};
