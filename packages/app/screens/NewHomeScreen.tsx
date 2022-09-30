import React from "react"
import { Text, View } from "react-native"
import S from "../consts/Styles"
import XLink from "../navigation/XLink"

export default function NewHomeScreen(props: { onPress?: () => void }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is my home screen!</Text>

      {/* console.log('THIS IS THE BIG QUESTION') */}
      <XLink style={S.button} to={'/users/andre'}>
        <Text>Go To Andre</Text>
      </XLink>
      <XLink style={S.button} to={'/machines'}>
        <Text>Go To Machines</Text>
      </XLink>
    </View>
  )
}