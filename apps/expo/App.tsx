import { Provider } from 'app/provider'
import React from 'react'
import AppNavigation from './navigation/AppNavigation'

export default function App() {
  return (
    <Provider>
      <AppNavigation />
    </Provider>
  )
}
