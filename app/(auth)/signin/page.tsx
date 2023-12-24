import Link from "next/link";

import AuthButton from "../components/auth-button";
import { providers } from "@/constants";
import SignInAuthForm from "./signin-auth-form";

const SignInPage = () => {
  return (
    <div className="flex flex-col justify-between gap-12">
      <h1 className="font-bold text-3xl">
        Log in
      </h1>
      <div className="flex flex-col gap-4">
        {providers.map(provider => (
          <AuthButton 
            key={provider.title}
            title={provider.title}
            logo={provider.logo}
            provider={provider.provider}
          />
        ))}
      </div>
      <SignInAuthForm />
      <p className="text-center text-xs">
        Don't have an account? <Link href="/signup" className="underline">Sign up</Link>
      </p>
    </div>
  )
};

export default SignInPage;