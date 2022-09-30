import React from 'react'
import { useRouter } from "next/router"
import { Pressable, ViewProps } from 'react-native'

export default function XLink(props: { ref?: string, to: string, params?: any } & ViewProps) {
  const router = useRouter()
  const url = props.ref // TODO add in params

  /**
   * TODO - Maybe change from Pressable to something more web-friendly that includes
   *        expected behavior on web such as right-click and pointer.
   *        - Expo Link object? <a> tag?
   */
  return (
    <Pressable style={props.style} onPress={() => router.push(props.to)}>
      {props.children}
    </Pressable>
  )
}