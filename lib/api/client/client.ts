import { useAuthStore } from "@/store/auth/authStore"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = useAuthStore.getState().token

  const isFormData = options.body instanceof FormData

  const response = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers: {
      ...(!isFormData && {
        "Content-Type": "application/json",
      }),

      ...(token && {
        Authorization: `Bearer ${token}`,
      }),

      ...options.headers,
    },
  })

  if (!response.ok) {
    let errorData

    try {
      errorData = await response.json()
    } catch {
      errorData = null
    }

    throw {
      status: response.status,
      data: errorData,
    }
  }

  return response.json()
}
