import React from "react"
import DetailScreen from 'app/screens/DetailScreen'
import useXParam from "app/navigation/UseXParam"

export default function () {
  const name = useXParam('id')

  return (
    <DetailScreen name={name} />
  )
}