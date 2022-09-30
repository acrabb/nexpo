import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import IdScreen from '../screens/IdScreen'


const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
}>()

export default function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={IdScreen}
        options={{
          title: 'User',
        }}
      />
    </Stack.Navigator>
  )
}
