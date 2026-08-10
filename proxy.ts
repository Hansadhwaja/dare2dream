import { NextRequest, NextResponse } from "next/server"

const protectedRoutes = ["/profile", "/webinar", "/updates"]

const authRoutes = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
]

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const token = request.cookies.get("auth-token")?.value

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  )

  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route))

  // Protect authenticated routes
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Authenticated users don't need login/register
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/webinar/:path*",
    "/updates/:path*",
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
  ],
}
