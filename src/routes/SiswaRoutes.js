import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DashboardBerita from '../components/Berita/DashboardBerita';
import BeritaDetail from '../components/Berita/BeritaDetail';

import MenuSiswaScreen from '../screens/Siswa/MenuSiswaScreen';
import DashboardKonseling from '../screens/Siswa/DashboardKonseling';
import BuatJadwalKonseling from '../screens/Siswa/BuatJadwalKonseling';
import IzinDispensasi from '../screens/Siswa/IzinDispensasi';
import BuatPerizinan from '../screens/Siswa/BuatPerizinan';
import DetailPerizinan from '../screens/Siswa/DetailPerizinan';

const Stack = createNativeStackNavigator();

function SiswaRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="MenuSiswaScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MenuSiswaScreen" component={MenuSiswaScreen} />
      <Stack.Screen name="DashboardKonseling" component={DashboardKonseling} />
      <Stack.Screen name="DashboardBerita" component={DashboardBerita} />
      <Stack.Screen name="BeritaDetail" component={BeritaDetail} />
      <Stack.Screen
        name="BuatJadwalKonseling"
        component={BuatJadwalKonseling}
      />
      <Stack.Screen name="IzinDispensasi" component={IzinDispensasi} />
      <Stack.Screen name="BuatPerizinan" component={BuatPerizinan} />
      <Stack.Screen name="DetailPerizinan" component={DetailPerizinan} />
    </Stack.Navigator>
  );
}

export default SiswaRoutes;
