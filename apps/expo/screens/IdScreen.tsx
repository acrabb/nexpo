import DetailScreen from "app/screens/DetailScreen"
import React from "react"

IdWrapper.NavName = 'User' as const
// TODO define props type to include .route.params.id
export default function IdWrapper(props: any) {
  return (
    <DetailScreen {...props} name={props.route?.params?.id} />
  )
}