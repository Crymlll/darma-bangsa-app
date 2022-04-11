import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuWaliKelasScreen from '../screens/WaliKelas/MenuWaliKelasScreen';
import DashboardBerita from '../screens/WaliKelas/DashboardBerita';
import BeritaDetail from '../screens/WaliKelas/BeritaDetail';
import PerizinanSiswa from '../screens/WaliKelas/PerizinanSiswa';
import DetailPerizinan from '../screens/WaliKelas/DetailPerizinan';

const Stack = createNativeStackNavigator();

function WaliKelasRoutes() {
  return (
    <Stack.Navigator initialRouteName='MenuWaliKelasScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name="MenuWaliKelasScreen" component={MenuWaliKelasScreen} />
      <Stack.Screen name="DashboardBerita" component={DashboardBerita} />
      <Stack.Screen name="BeritaDetail" component={BeritaDetail}/>
      <Stack.Screen name="PerizinanSiswa" component={PerizinanSiswa}/>
      <Stack.Screen name="DetailPerizinan" component={DetailPerizinan}/>
    </Stack.Navigator>
  )
}

export default WaliKelasRoutes