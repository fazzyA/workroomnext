import Header from "@/components/Header"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <nav className="h-full flex items-center justify-center">
        {/* <Header /> */}
          {children}
      </nav>
    )
  }
  
  export default DashboardLayout