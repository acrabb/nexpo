import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import UserWrapper from '../screens/UserScreenWrapper'
import AppInfoScreen from 'app/screens/AppInfoScreen'
import ItemsScreenWrapper from '../screens/ItemsScreenWrapper'
import HomeDrawerTabs from './HomeDrawerTabs'


const Drawer = createDrawerNavigator()

const config = {
  screens: {
    [UserWrapper.NavName]: '/users/:id',
    // [AppInfoScreen.NavName]: '/appinfo', <- Not needed since drawer knows how to nav here
    "ItemsTab": {
      screens: {
        [ItemsScreenWrapper.NavName]: '/items/:itemId?' // NOTE: Use ? for optional params
      }
    }
  },
}

// TODO: Prep for deep-linking: https://reactnavigation.org/docs/deep-linking
const linking = {
  prefixes: ['https://myapp.com', 'myapp://'],
  config,
}


export default function NativeNavigation() {
  return (
    <NavigationContainer linking={linking}>
      <Drawer.Navigator screenOptions={{ headerShown: true }}>
        <Drawer.Screen name={HomeDrawerTabs.NavName} component={HomeDrawerTabs} />
        <Drawer.Screen name={AppInfoScreen.NavName} component={AppInfoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
