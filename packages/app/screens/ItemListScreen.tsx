import React from "react"
import { FlatList, Text, View } from "react-native"
import C from "../consts/Colors"
import S from "../consts/Styles"

export default function (props: { itemId?: string[] }) {
  return (
    <View style={S.container}>
      <FlatList
        style={{ width: '100%', height: '100%' }}
        data={['Machine 1', 'Machine 2', 'Machine 3']}
        renderItem={({ item, index }) => {
          return (
            <Text style={[S.textItem, { backgroundColor: props.itemId?.includes(index.toString()) ? C.grayC : undefined }]}>{item}</Text>
          )
        }}
      />
    </View>
  )
}