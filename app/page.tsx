import SignOut from "@/components/custom/signout";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth"

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>Hello {session?.user?.email}</h1>
      <h1>Hello</h1>
      <SignOut />
    </div>
  )
}
