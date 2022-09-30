import NewHomeScreen from "app/screens/NewHomeScreen"
import React from "react"

export default function (props: any) {
  return (
    <NewHomeScreen {...props}
      onPress={() => {
        console.log('this is mobile')
        props.navigation.navigate('user-detail', { id: 'Ty', anotherThing: { otherVar: "hello" } })
      }
      }
    />
  )
}