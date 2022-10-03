import React from "react"
import DetailScreen from 'app/screens/DetailScreen'
import { useRouter } from 'next/router'

/**
 * NOTE: the id "prop" is coming from the URL, not the props param
 * @param props none
 * @returns 
 */
export default function () {
  const router = useRouter()

  return (
    <DetailScreen name={router.query.id as string} />
  )
}