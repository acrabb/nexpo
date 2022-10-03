import DetailScreen from "app/screens/DetailScreen"
import React from "react"

interface UserWrapperProps {
  route?: {
    params?: {
      id: string
    }
  }
}

UserWrapper.NavName = 'User' as const
export default function UserWrapper(props: UserWrapperProps) {
  return (
    <DetailScreen {...props} name={props.route?.params?.id ?? "unknown"} />
  )
}