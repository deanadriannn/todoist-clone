import { getServerSession } from "next-auth"
import { authOptions } from "./auth-options"

export const getSession = async () => {
  return getServerSession(authOptions);
}