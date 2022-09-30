import React from "react"
import DetailScreen from 'app/screens/DetailScreen'
import { useRouter } from 'next/router'

export default function (props: any) {
  const router = useRouter()

  return (
    <DetailScreen name={router.query.id as string} />
  )
}