import DetailScreen from "app/screens/DetailScreen"
import React from "react"

IdWrapper.NavName = 'user' as const
export default function IdWrapper(props: any) {
  return (
    <DetailScreen {...props} name={props.route.params.id} />
  )
}