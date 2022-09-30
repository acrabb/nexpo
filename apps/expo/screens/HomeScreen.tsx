import NewHomeScreen from "app/screens/NewHomeScreen"
import React from "react"
import IdScreen from "./IdScreen"

HomeWrapper.NavName = 'Home' as const
export default function HomeWrapper(props: any) {
  return (
    <NewHomeScreen {...props}
      onPress={() => {
        console.log('this is mobile')
        props.navigation.navigate(IdScreen.NavName, { id: 'Ty', anotherThing: { otherVar: "hello" } })
      }
      }
    />
  )
}