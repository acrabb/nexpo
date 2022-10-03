import ItemListScreen from "app/screens/ItemListScreen"
import React from "react"

interface ItemListWrapperProps {
  route?: {
    params?: {
      itemId?: string
    }
  }
}

ItemsScreenWrapper.NavName = 'Items' as const
export default function ItemsScreenWrapper(props: ItemListWrapperProps) {
  return (
    <ItemListScreen itemId={props.route?.params?.itemId} />
  )
}