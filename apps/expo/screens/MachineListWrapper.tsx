import MachineListScreen from "app/screens/MachineListScreen"
import React from "react"

MachineListWrapper.NavName = 'Machines' as const
// TODO define props type to include .route.params.id
export default function MachineListWrapper(props: any) {
  return (
    <MachineListScreen {...props} />
  )
}