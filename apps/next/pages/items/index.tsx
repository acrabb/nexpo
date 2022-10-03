import React from "react"
import ItemListScreen from 'app/screens/ItemListScreen'
import { useRouter } from 'next/router'

/**
 * NOTE: the itemId "prop" is coming from the URL, not the props param
 * @param props none
 * @returns 
 */
export default function () {
  const router = useRouter()

  return (
    <ItemListScreen itemId={router.query.itemId as string} />
  )
}