import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { serverRefresh } from "./services/serverAuth";

const publicRoutes = ["/tasks", "/tasks"];
const privateRoutes = ["/bucket"];

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublic = publicRoutes.includes(path);
  const isPrivate = privateRoutes.includes(path);

  if (!isPublic && !isPrivate) {
    return NextResponse.next();
  }

  if (isPublic) {
    return NextResponse.next();
  }

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken");
  const refreshToken = cookieStore.get("refreshToken");

  if (accessToken) {
    return NextResponse.next();
  }

  if (!refreshToken) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  const { success } = await serverRefresh();

  NextResponse.next();
}

export const config = {
  matcher: ["/", "/bucket"],
};
