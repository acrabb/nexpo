import React from "react"
import { Text, View, Image } from "react-native"
import S from "../consts/Styles"

export default function DetailScreen(props: { name?: string }) {
  return (

    <View style={S.container}>
      <Text style={S.funText}>
        This is a detail screen: {props.name ?? 'none'}
      </Text>
      <Image
        style={S.tinyLogo}
        alt={{}}
        source={{
          uri: 'https://ca.slack-edge.com/T02KFP4LX5E-U02JS3M3JCS-f1c659527681-512',
        }}
      />
      <Image
        style={S.tinyLogo}
        alt={{}}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-H1nVA-ehCbocH2FwDy80TSMHwcUHAVZ7w&usqp=CAU',
        }}
      />
      <Image
        style={S.tinyLogo}
        alt={{}}
        source={{
          uri: 'https://ca.slack-edge.com/T02KFP4LX5E-U02LH0DJ3L0-g49ebc3efd53-512',
        }}
      />
    </View>
  )
}