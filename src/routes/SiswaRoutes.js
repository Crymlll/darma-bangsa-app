import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuSiswaScreen from '../screens/Siswa/MenuSiswaScreen';
import DashboardKonseling from '../screens/Siswa/DashboardKonseling';
import KonselingMenuScreen from '../screens/Siswa/KonselingMenuScreen';

const Stack = createNativeStackNavigator();

function SiswaRoutes() {
  
  return (
    <Stack.Navigator initialRouteName='MenuSiswaScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name="MenuSiswaScreen" component={MenuSiswaScreen} />
      <Stack.Screen name="DashboardKonseling" component={DashboardKonseling} />
      <Stack.Screen name="KonselingMenuScreen" component={KonselingMenuScreen} />
    </Stack.Navigator>
  )
}

export default SiswaRoutes