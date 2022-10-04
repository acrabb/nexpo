import { CSSProperties, StyleHTMLAttributes } from "react"
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native"
import C from "./Colors"
import L from "./Layout"


/**
 * Not all ViewStyle proprties in React Native map to CSSProperties in the web.
 * For example, 'paddingHorizontal'.
 *
 * This creates a StyleSheet object that will not auto-complete unsupported keys.
 * TODO - Change to throw error if anything not allowed is included. (negated types?)
 */

type WebExcluded = 'paddingHorizontal' | 'paddingVertical'
type NexpoStyles<T> = { [P in keyof T]: Omit<ViewStyle, WebExcluded> | Omit<TextStyle, WebExcluded> | Omit<ImageStyle, WebExcluded> }

/**
 * neXpo wrapper for React Native's StyleSheet.create()
 * @param styles
 * @returns
 */
export function create<T extends NexpoStyles<T>>(styles: T | NexpoStyles<T>): NexpoStyles<T> {
  return StyleSheet.create(styles)
}

const S = create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: C.grayC,
    borderRadius: L.corner,
    padding: 5,
    // paddingVertical: 5, // NOTE: not supported on web
    paddingLeft: 10,
    paddingRight: 10,
    margin: 5,
  },
  textItem: {
    fontSize: 18,
    padding: 3
  },
  funText: {
    color: C.darkGray3,
    fontSize: 24,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
})

export default S