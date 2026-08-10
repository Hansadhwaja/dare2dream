export type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  status: UserStatus
  role: UserRole
  country?: string
}

export type UserRole = "user" | "admin"
export type UserStatus = "approved" | "pending" | "rejected"

export interface LoginResponse {
  token: string
  user: User
}

export interface RegisterResponse {
  message: string
}

export interface SessionResponse {
  success: boolean
}
