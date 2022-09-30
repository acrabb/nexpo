import DetailScreen from "app/screens/DetailScreen"
import React from "react"

export default function (props: any) {
  return (
    <DetailScreen {...props} name={props.route.params.id} />
  )
}