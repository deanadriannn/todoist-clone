"use client";

// Component to get Session on Client Component
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default AuthProvider