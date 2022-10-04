import useXParam from "app/navigation/UseXParam"
import ItemListScreen from "app/screens/ItemListScreen"
import React from "react"


ItemsScreenWrapper.NavName = 'Items' as const
export default function ItemsScreenWrapper() {
  const items = useXParam<string[]>('itemId')
  return (
    <ItemListScreen itemId={items} />
  )
}