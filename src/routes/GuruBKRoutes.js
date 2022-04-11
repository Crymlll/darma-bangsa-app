import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuGuruBKScreen from '../screens/GuruBK/MenuGuruBKScreen';
import DashboardBerita from '../screens/GuruBK/DashboardBerita';
import BeritaDetail from '../screens/GuruBK/BeritaDetail';
import DashboardKonseling from '../screens/GuruBK/DashboardKonseling';
import RiwayatKonseling from '../screens/GuruBK/RiwayatKonseling';
import DetailKonseling from '../screens/GuruBK/DetailKonseling';

const Stack = createNativeStackNavigator();

function GuruBKRoutes() {
  return (
    <Stack.Navigator initialRouteName='MenuGuruBKScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name="MenuGuruBKScreen" component={MenuGuruBKScreen} />
      <Stack.Screen name="DashboardBerita" component={DashboardBerita} />
      <Stack.Screen name="BeritaDetail" component={BeritaDetail} />
      <Stack.Screen name="DashboardKonseling" component={DashboardKonseling} />
      <Stack.Screen name="RiwayatKonseling" component={RiwayatKonseling} />
      <Stack.Screen name="DetailKonseling" component={DetailKonseling} />
    </Stack.Navigator>
  )
}

export default GuruBKRoutes