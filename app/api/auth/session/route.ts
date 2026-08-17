import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { token } = await request.json()

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Token is required" },
        { status: 400 }
      )
    }

    const response = NextResponse.json({
      success: true,
    })

    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    })

    return response
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request",
      },
      { status: 400 }
    )
  }
}

export async function DELETE() {
  const response = NextResponse.json({
    success: true,
  })

  response.cookies.set("auth-token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  })

  return response
}
