import { Pressable, ViewProps } from 'react-native'
import useXNav from './UseXNav.native'

/**
 * @param props 
 * @returns 
 */

export default function XLink(props: { to: string } & ViewProps) {
  const nav = useXNav()
  const url = props.to

  return (
    <Pressable style={props.style} onPress={() => nav.to(url)}>
      {props.children}
    </Pressable>
  )
}