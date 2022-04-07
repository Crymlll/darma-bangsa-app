import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuGuruBKScreen from '../screens/GuruBK/MenuGuruBKScreen';

const Stack = createNativeStackNavigator();

function GuruBKRoutes() {
  return (
    <Stack.Navigator initialRouteName='MenuGuruBKScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name="MenuGuruBKScreen" component={MenuGuruBKScreen} />
    </Stack.Navigator>
  )
}

export default GuruBKRoutes