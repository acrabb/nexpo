import React from "react"
import DetailScreen from 'app/screens/DetailScreen'
import { useRouter } from 'next/router'

export default function (props: any) {
  const router = useRouter()
  const id = router.query.id

  return (
    <DetailScreen name={`${id}`} />
  )
}