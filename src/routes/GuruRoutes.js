import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuGuruScreen from '../screens/Guru/MenuGuruScreen';

const Stack = createNativeStackNavigator();

function GuruRoutes() {
  return (
    <Stack.Navigator initialRouteName='MenuGuruScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name="MenuGuruScreen" component={MenuGuruScreen} />
    </Stack.Navigator>
  )
}

export default GuruRoutes