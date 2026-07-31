import AuthHeader from "@/components/Auth/AuthHeader"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <AuthHeader />
      {children}
    </main>
  )
}

export default AuthLayout
