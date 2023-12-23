import Image from "next/image";

import { TodoistMobile } from "@/public/assets";
import Spinner from "@/components/custom/spinner";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/get-session";

const AppPage = async () => {
  const session = await getSession();

  if (session) {
    redirect("app/today");
  }

  if (!session) {
    redirect("/signin")
  }
  
  return (
    <div className="flex flex-col justify-center items-center h-full gap-3">
      <Image 
        src={TodoistMobile}
        alt="Logo"
        width={70}
        height={70}
      />
      <Spinner />
    </div>
  )
}

export default AppPage;