import { cookies } from "next/headers"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function serverApiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const cookieStore = await cookies()
  const token = cookieStore.get("auth-token")?.value

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",

      ...(token && {
        Authorization: `Bearer ${token}`,
      }),

      ...options?.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`)
  }

  return response.json()
}
