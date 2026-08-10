import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { token } = await request.json()

  if (!token) {
    return NextResponse.json({ message: "Token is required" }, { status: 400 })
  }

  const response = NextResponse.json({
    success: true,
  })

  response.cookies.set("auth-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  })

  return response
}

export async function DELETE() {
  const response = NextResponse.json({
    success: true,
  })

  response.cookies.delete("auth-token")

  return response
}
