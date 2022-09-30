import React from "react"
import NewHomeScreen from 'app/screens/NewHomeScreen'
import { useRouter } from "next/router"

export default function (props: any) {
  const router = useRouter()

  return (
    <NewHomeScreen
      onPress={() => {
        console.log('this is web')
        router.push('/user/ty')
      }}
    />
  )
}
