import React from "react"
import { Button, Pressable, Text, View } from "react-native"
import { View as DView } from "dripsy"
import S from "../consts/Styles"

export default function NewHomeScreen(props: { onPress: () => void }) {
  // const navTo = useNavTo() // <- how would this be defined for mobile vs web?
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is my home screen!</Text>
      <Pressable style={S.button}
        onPress={() => {
          // console.log('THIS IS THE BIG QUESTION')
          props.onPress?.()
          // navTo(`/user/<variable>/anotherThing/<anotherVar>?qp1=this&qp2=that`)
        }}
      // onPressMobile={() => {/** */}}
      // onPressWeb={() => { /** */}}
      >
        <Text>Hello Ty</Text>
      </Pressable>
    </View>
  )
}