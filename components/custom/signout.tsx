"use client";

import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <Button
      variant="destructive"
      onClick={() => signOut({
        redirect: true,
        callbackUrl: `${window.location.origin}/signin`
      })}
    >SignOut</Button>
  )
}

export default SignOut