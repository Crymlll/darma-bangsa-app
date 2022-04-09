import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuGuruScreen from '../screens/Guru/MenuGuruScreen';
import DashboardBerita from '../screens/Guru/DashboardBerita';
import BeritaDetail from '../screens/Guru/BeritaDetail';


const Stack = createNativeStackNavigator();

function GuruRoutes() {
  return (
    <Stack.Navigator initialRouteName='MenuGuruScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name="MenuGuruScreen" component={MenuGuruScreen} />
      <Stack.Screen name="DashboardBerita" component={DashboardBerita} />
      <Stack.Screen name="BeritaDetail" component={BeritaDetail} />
    </Stack.Navigator>
  )
}

export default GuruRoutes