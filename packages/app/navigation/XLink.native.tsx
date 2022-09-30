import { useLinkTo } from '@react-navigation/native'
import { ReactElement } from 'react'
import { Pressable, ViewProps } from 'react-native'

/**
 * From Expo Docs:
 *  This is a low-level hook used to build more complex behavior on top. We recommended to
 *  use the useLinkProps hook to build your custom link components instead of using this hook
 *  directly. It will ensure that your component is properly accessible on the web.
 *  - NOTE: We're not using this component on the web so its ok.
 * @param props 
 * @returns 
 */

export default function XLink(props: { ref?: string, to: string, params?: any } & ViewProps) {
  const linkTo = useLinkTo()
  const url = props.to // TODO add in params

  return (
    <Pressable style={props.style} onPress={() => linkTo(url)}>
      {props.children}
    </Pressable>
  )
}