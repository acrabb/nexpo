import { useRouter } from "next/router"

export default function useXParam<T extends (string | string[]) = string>(key: string): T | undefined {
  const nextRouter = useRouter()
  // FIXME - how to not have this show an error
  // https://github.com/microsoft/TypeScript/issues/50027
  return nextRouter.query[key]
}