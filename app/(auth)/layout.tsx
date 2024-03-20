const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="h-full flex items-center justify-center">
        {children}
    </nav>
  )
}

export default AuthLayout