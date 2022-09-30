import React from "react"
import { FlatList, Text, View } from "react-native"
import S from "../consts/Styles"

export default function MachineListScreen(props: { name: string }) {
  return (
    <View style={S.container}>
      <FlatList
        style={{ width: '100%', height: '100%' }}
        data={['Machine 1', 'Machine 2', 'Machine 3']}
        renderItem={({ item, index }) => <Text style={S.textItem}>{item}</Text>}
      />
    </View>
  )
}