import { useRouter } from "next/router"
import { XNavigator } from "./XNavigator"

export default function useXNav(): XNavigator {
  const nextRouter = useRouter()
  return {
    to: nextRouter.push,
    back: nextRouter.back
  }
}