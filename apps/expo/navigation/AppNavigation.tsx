import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeWrapper from '../screens/HomeScreen'
import HomeScreen from '../screens/HomeScreen'
import IdWrapper from '../screens/IdScreen'

import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const config = {
  screens: {
    User: '/users/:id',
    Profile: '/account',
  },
}

const linking = {
  prefixes: ['https://myapp.com', 'myapp://'],
  config,
}

export default function NativeNavigation() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name={HomeWrapper.NavName} component={HomeScreen} />
        <Stack.Screen name={IdWrapper.NavName} component={IdWrapper} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
