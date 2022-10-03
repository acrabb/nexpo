import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreenWrapper from '../screens/HomeScreenWrapper'
import ItemsScreenWrapper from '../screens/ItemsScreenWrapper'
import UserWrapper from '../screens/UserScreenWrapper'

const Tabs = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const ItemsTabStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ItemsScreenWrapper.NavName} component={ItemsScreenWrapper} />
    </Stack.Navigator>
  )
}

HomeDrawerTabs.NavName = "HomeDrawer"
export default function HomeDrawerTabs() {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name={HomeScreenWrapper.NavName} component={HomeScreenWrapper} />
      <Tabs.Screen name={UserWrapper.NavName} component={UserWrapper} />
      <Tabs.Screen name={'ItemsTab'} component={ItemsTabStack} />
    </Tabs.Navigator>
  )
}