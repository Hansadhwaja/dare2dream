const AuthCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-150 px-5 py-8 sm:px-8 lg:px-10 mx-auto">
      {children}
    </div>
  )
}

export default AuthCard
