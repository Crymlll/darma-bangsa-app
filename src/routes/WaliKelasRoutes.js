import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuWaliKelasScreen from '../screens/WaliKelas/MenuWaliKelasScreen';

const Stack = createNativeStackNavigator();

function WaliKelasRoutes() {
  return (
    <Stack.Navigator initialRouteName='MenuWaliKelasScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name="MenuWaliKelasScreen" component={MenuWaliKelasScreen} />
    </Stack.Navigator>
  )
}

export default WaliKelasRoutes