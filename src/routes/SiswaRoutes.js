import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuSiswaScreen from '../screens/Siswa/MenuSiswaScreen';

const Stack = createNativeStackNavigator();

function SiswaRoutes() {
  
  return (
    <Stack.Navigator initialRouteName='MenuSiswaScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name="MenuSiswaScreen" component={MenuSiswaScreen} />
    </Stack.Navigator>
  )
}

export default SiswaRoutes