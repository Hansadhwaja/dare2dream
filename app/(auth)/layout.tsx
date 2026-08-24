import AuthHeader from "@/components/Auth/AuthHeader"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="space-y-4">
      <AuthHeader />
      {children}
    </main>
  )
}

export default AuthLayout
