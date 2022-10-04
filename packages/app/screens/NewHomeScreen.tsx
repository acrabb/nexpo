import React from "react"
import { Button, Text, View } from "react-native"
import S from "../consts/Styles"
import useXNav from "../navigation/UseXNav"
import XLink from "../navigation/XLink"

export default function NewHomeScreen() {
  const nav = useXNav()
  return (
    <View style={S.container}>
      <Text style={{ paddingBottom: 20 }}>This is a home screen!</Text>

      <XLink style={S.button} to={'/users/param1'}>
        <Text>Go To User</Text>
      </XLink>
      <XLink style={S.button} to={'/items?itemId=2&itemId=1'}>
        <Text>Go To Item 3 via Link</Text>
      </XLink>
      <Button title="Go To Items via callback" onPress={() => nav.to('/items')} />
    </View>
  )
}