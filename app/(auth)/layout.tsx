import Image from "next/image";

import { TodoistMobile } from "@/public/assets";

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
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