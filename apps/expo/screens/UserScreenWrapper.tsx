import useXParam from "app/navigation/UseXParam"
import DetailScreen from "app/screens/DetailScreen"
import React from "react"

UserScreenWrapper.NavName = 'User' as const
export default function UserScreenWrapper() {
  const name = useXParam('id')

  return (
    <DetailScreen name={name} />
  )
}