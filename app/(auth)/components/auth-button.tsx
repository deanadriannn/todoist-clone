"use client";

import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";

interface AuthButtonProps {
  title: string;
  logo: { src: string };
  provider: string;
}


const AuthButton = ({ title, logo, provider }: AuthButtonProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const signInWith = async (provider: string) => {
    try {
      setLoading(true)
      await signIn(provider, { callbackUrl: `${window.location.origin}/app` })
        .then(() => {
          console.log('Signed in successfully');
        })
        .catch((error: any) => {
          console.log(error)
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Button
      onClick={() => signInWith(provider)}
      disabled={loading}
      className="text-black bg-transparent hover:bg-[#f4f5f4] transition text-lg font-bold border border-[#f4f5f4] py-6">
      <Image 
        src={logo.src}
        alt={`${title} logo`}
        width={20}
        height={20}
        className="mr-2"
      /> Continue with {title}
    </Button>
  )
}

export default AuthButton