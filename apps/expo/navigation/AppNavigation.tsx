import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeWrapper from '../screens/HomeScreen'
import HomeScreen from '../screens/HomeScreen'
import IdWrapper from '../screens/IdScreen'
import AccountScreen from 'app/screens/AccountScreen'
import MachineListScreen from 'app/screens/MachineListScreen'
import MachineListWrapper from '../screens/MachineListWrapper'


const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const config = {
  screens: {
    [IdWrapper.NavName]: '/users/:id',
    Account: '/Account',
    // Help: '/help',
    [HomeWrapper.NavName]: {
      screens: {
        [MachineListWrapper.NavName]: '/machines'
      }
    }
  },
}

const linking = {
  prefixes: ['https://myapp.com', 'myapp://'],
  config,
}

const HomeDrawerTabs = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name={'HomeScreen'} component={HomeScreen} />
      <Tabs.Screen name={IdWrapper.NavName} component={IdWrapper} />
      <Tabs.Screen name={MachineListWrapper.NavName} component={MachineTabStack} />
    </Tabs.Navigator>
  )
}

const MachineTabStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'MachinesList'} component={MachineListScreen} />
    </Stack.Navigator>
  )
}

export default function NativeNavigation() {
  return (
    <NavigationContainer linking={linking}>
      <Drawer.Navigator screenOptions={{ headerShown: true }}>
        <Drawer.Screen name={HomeWrapper.NavName} component={HomeDrawerTabs} />
        <Drawer.Screen name={'Account'} component={AccountScreen} initialParams={{ name: 'Hardcoded' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
