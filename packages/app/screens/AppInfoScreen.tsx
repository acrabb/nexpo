import React from "react"
import { Text, View } from "react-native"
import S from "../consts/Styles"

/**
 * An example of a screen that is directly used (without a wrapper) in the Expo and Next navigation logic
 * @param props
 * @returns 
 */
AppInfoScreen.NavName = 'App Info' as const
export default function AppInfoScreen() {

  return (
    <View style={S.container}>
      <Text style={{ fontSize: 40, fontWeight: 'bold', paddingBottom: 20 }}>neXpo</Text>
      <Text>Sample App</Text>
    </View>
  )
}