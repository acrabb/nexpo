import { useRoute } from '@react-navigation/native'

export default function useXParam<T extends (string | string[]) = string>(key: string): T | undefined {
  const expoRouter = useRoute()
  return expoRouter.params?.[key]
}