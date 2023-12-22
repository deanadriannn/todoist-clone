"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

interface AuthButtonProps {
  title: string;
  logo: { src: string };
}

const AuthButton = ({ title, logo }: AuthButtonProps) => {
  return (
    <Button
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