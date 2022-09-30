import React from "react"
import { Text, View } from "react-native"
import S from "../consts/Styles"
// import { View as DView } from "dripsy"

export default function DetailScreen(props: { name: string }) {
  return (
    <View style={S.container}>
      <Text style={S.funText}>
        This is a detail screen: {props.name ?? 'none'}
      </Text>
      {/* <a>Testing A Tag</a> */}
    </View>
  )
}