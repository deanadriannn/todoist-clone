import Image from "next/image";
import { redirect } from "next/navigation";

import { getSession } from "@/lib/get-session";
import { TodoistMobile } from "@/public/assets";

export default async function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getSession();

  if (session) {
    redirect("/app");
  }
  
  return (
    <div className="py-3">
      <Image 
        src={TodoistMobile}
        alt="Mobile Logo"
        width={40}
        height={40}
        className="mb-10"
      />
      {children}
    </div>
  )
}