import NewHomeScreen from "app/screens/NewHomeScreen"
import React from "react"

/**
 * NOTE: Though we're not passing in props to NewHomeScreen, defining a Wrapper
 *        is still preferred so that we can define its NavName field for routing.
 * @param props
 * @returns 
 */
HomeScreenWrapper.NavName = 'HomeScreen' as const
export default function HomeScreenWrapper(props: any) {
  return (
    <NewHomeScreen {...props}
    />
  )
}