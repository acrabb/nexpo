import React from "react"
import ItemListScreen from 'app/screens/ItemListScreen'
import { useRouter } from 'next/router'
import useXParam from "app/navigation/UseXParam"

/**
 * NOTE: the itemId "prop" is coming from the URL, not the props param
 * @param props none
 * @returns 
 */
export default function () {
  const items = useXParam<string[]>('itemId')

  return (
    <ItemListScreen itemId={items} />
  )
}