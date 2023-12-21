import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Google, Facebook, Apple } from "@/public/assets";

const providers = [
  {
    name: "Google",
    logo: Google
  },
  {
    name: "Facebook",
    logo: Facebook
  },
  {
    name: "Apple",
    logo: Apple
  },
];

const AuthButton = () => {
  return (
    <div className="flex flex-col gap-4">
      {providers.map(provider => (
        <Button 
          key={provider.name}
          className="text-black bg-transparent hover:bg-[#f4f5f4] transition text-lg font-bold border border-[#f4f5f4] py-6">
          <Image 
            src={provider.logo}
            alt={`${provider.name} logo`}
            width={20}
            height={20}
            className="mr-2"
          /> Continue with {provider.name}
        </Button>
      ))}
    </div>
  )
}

export default AuthButton