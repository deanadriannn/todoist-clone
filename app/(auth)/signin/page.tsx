import AuthButton from "../components/auth-button";
import AuthForm from "../components/auth-form";

const SignInPage = () => {
  return (
    <div className="flex flex-col justify-between gap-12">
      <h1 className="font-bold text-3xl">
        Log in
      </h1>
      <AuthButton />
      <AuthForm />
    </div>
  )
};

export default SignInPage;