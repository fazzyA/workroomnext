import { ROUTES_PATH, authRoutes, publicRoutes } from "./utils/constants";
import { NextResponse } from "next/server";

import { auth } from "@/packages/nextauth/auth";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(
    ROUTES_PATH.API_AUTH_PREFIX
  );
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname as any);
  if (isApiAuthRoute) {
    // else allow all api auth routes
    return NextResponse.next();
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      // redirect to default login redirect if user is logged in and trying to access auth route
      return NextResponse.redirect(new URL(ROUTES_PATH.DASHBOARD, nextUrl));
    }
    return NextResponse.next();
  }
  // if user isn't logged in
  if (!isLoggedIn) {
    if (!isPublicRoute) {
      // redirect to login page if user is not logged in and trying to access protected route

      return NextResponse.redirect(new URL(ROUTES_PATH.LOGIN, nextUrl));
    }
  }

  return NextResponse.next();
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  // invoke at all routes starting with / and api/trpc
  // ignore all routes that is a static file or _next
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
