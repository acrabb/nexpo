import NewHomeScreen from "app/screens/NewHomeScreen"
import React from "react"
import IdScreen from "./IdScreen"

HomeWrapper.NavName = 'HomeDrawer' as const
export default function HomeWrapper(props: any) {
  return (
    <NewHomeScreen {...props}
    />
  )
}