import authConfig from "./auth.config"
import NextAuth from "next-auth"
export const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const isLoggedIn = !!req.auth;
    console.log("🚀 ~ auth ~ isLoggedIn:", isLoggedIn)
    console.log("Route ", req.nextUrl.pathname)
  // req.auth
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
 
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)"
  ]}