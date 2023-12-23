import Link from "next/link";

import AuthButton from "../components/auth-button";
import { providers } from "@/constants";
import AuthForm from "../components/auth-form";
import { getSession } from "@/lib/get-session";
import { redirect } from "next/navigation";

const SignUpPage = async () => {
  const session = await getSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex flex-col justify-between gap-12">
      <h1 className="font-bold text-3xl">
        Sign up
      </h1>
      <div className="flex flex-col gap-4">
        {providers.map(provider => (
          <AuthButton 
            key={provider.title}
            title={provider.title}
            logo={provider.logo}
          />
        ))}
      </div>
      <AuthForm type="signup" />
      <p className="text-center text-xs">
        Already signed up? <Link href="/signin" className="underline">Go to login</Link>
      </p>
    </div>
  )
};

export default SignUpPage;