import Image from "next/image";

import { TodoistMobile } from "@/public/assets";
import Spinner from "@/components/custom/spinner";

export default function Loading() {
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