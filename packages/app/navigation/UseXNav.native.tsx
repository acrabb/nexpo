import { useLinkTo } from '@react-navigation/native'
import { XNavigator } from './XNavigator'

export default function useXNav(): XNavigator {
  const rnNav = useLinkTo()
  return {
    to: rnNav
  }
}