import Sidebar from "@/components/custom/sidebar";


const AppLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="relative pt-4">
      <div className="absolute left-[-50px]">
        <Sidebar />
      </div>
      <main>
        {children}  
      </main>  
    </div>
  )
}

export default AppLayout;