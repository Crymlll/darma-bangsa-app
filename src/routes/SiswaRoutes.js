import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuSiswaScreen from '../screens/Siswa/MenuSiswaScreen';
import DashboardKonseling from '../screens/Siswa/DashboardKonseling';
import DashboardBerita from '../screens/Siswa/DashboardBerita';
import BeritaDetail from '../screens/Siswa/BeritaDetail';
import BuatJadwalKonseling from '../screens/Siswa/BuatJadwalKonseling';

const Stack = createNativeStackNavigator();

function SiswaRoutes() {
  
  return (
    <Stack.Navigator initialRouteName='MenuSiswaScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name="MenuSiswaScreen" component={MenuSiswaScreen} />
      <Stack.Screen name="DashboardKonseling" component={DashboardKonseling} />
      <Stack.Screen name="DashboardBerita" component={DashboardBerita} />
      <Stack.Screen name="BeritaDetail" component={BeritaDetail} />
      <Stack.Screen name="BuatJadwalKonseling" component={BuatJadwalKonseling} />
    </Stack.Navigator>
  )
}

export default SiswaRoutes