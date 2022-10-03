import React from 'react'
import { ViewProps } from 'react-native'
import Link from 'next/link'

/**
 * Next.js version of XLink using its native `Link` component.
 * Using <a> internally for browser-UX such as hover states and right-click menu.
 * @param props 
 * @returns 
 */
export default function XLink(props: { to: string } & ViewProps) {
  return (
    // Note: style error is complaining because React Native ViewStyle does not map to React's CSSProperties
    <Link href={props.to}><a style={props.style}>{props.children}</a></Link>
  )
}