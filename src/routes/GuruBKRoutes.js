import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuGuruBKScreen from '../screens/GuruBK/MenuGuruBKScreen';
import DashboardBerita from '../screens/GuruBK/DashboardBerita';
import BeritaDetail from '../screens/GuruBK/BeritaDetail';


const Stack = createNativeStackNavigator();

function GuruBKRoutes() {
  return (
    <Stack.Navigator initialRouteName='MenuGuruBKScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name="MenuGuruBKScreen" component={MenuGuruBKScreen} />
      <Stack.Screen name="DashboardBerita" component={DashboardBerita} />
      <Stack.Screen name="BeritaDetail" component={BeritaDetail} />
    </Stack.Navigator>
  )
}

export default GuruBKRoutes