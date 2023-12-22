import Link from "next/link";

import AuthButton from "../components/auth-button";
import { providers } from "@/constants";

const SignUpPage = () => {
  return (
    <div className="flex flex-col justify-between gap-12">
      <h1 className="font-bold text-3xl">
        Sign up
      </h1>
      {/* {providers.map(provider => (
        <AuthButton 
          key={provider.title}
          title={provider.title}
          logo={provider.logo}
        />
      ))} */}
      <p className="text-center text-xs">
        Already signed up? <Link href="/signin" className="underline">Go to login</Link>
      </p>
    </div>
  )
};

export default SignUpPage;