import React from "react"
import { Text, View } from "react-native"
import S from "../consts/Styles"

/**
 * An example of a screen that is directly used (without a wrapper) in the Expo and Next navigation logic
 * @param props
 * @returns 
 */
export default function AccountScreen(props: { name: string }) {
  let name = props.route?.params?.name // mobile
  // if (!name) {
  //   name = 
  // }

  return (
    <View style={S.container}>
      <Text>
        User Is: {name ?? 'none'}
      </Text>
      <Text>
        User Is Also: Awesome
      </Text>
      <Text>
        User Is Also: Nexpo Genius
      </Text>
      {/* <a>Testing A Tag</a> */}
    </View>
  )
}