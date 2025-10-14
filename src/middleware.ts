import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  const token = request.cookies.get("next-auth.session-token")?.value;

  if (!token) {
    url.pathname = "/auth/signin";
    url.searchParams.set("callbackUrl", "/checkout");
    return NextResponse.redirect(url);
  }

  if (request.nextUrl.pathname === "/checkout") {
    return NextResponse.next();
  }

  return NextResponse.redirect("/checkout");
}

export const config = {
  matcher: "/checkout",
};
