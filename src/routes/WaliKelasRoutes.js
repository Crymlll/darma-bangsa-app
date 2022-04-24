import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DashboardBerita from '../components/Berita/DashboardBerita';
import BeritaDetail from '../components/Berita/BeritaDetail';

import LihatPerizinan from '../components/Perizinan/LihatPerizinan';
import DetailPerizinan from '../components/Perizinan/DetailPerizinan';

import DetailPerizinanWK from '../screens/WaliKelas/DetailPerizinan';
import MenuWaliKelasScreen from '../screens/WaliKelas/MenuWaliKelasScreen';
import PerizinanSiswa from '../screens/WaliKelas/PerizinanSiswa';

const Stack = createNativeStackNavigator();

function WaliKelasRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="MenuWaliKelasScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="MenuWaliKelasScreen"
        component={MenuWaliKelasScreen}
      />
      <Stack.Screen name="DashboardBerita" component={DashboardBerita} />
      <Stack.Screen name="BeritaDetail" component={BeritaDetail} />
      <Stack.Screen name="PerizinanSiswa" component={PerizinanSiswa} />
      <Stack.Screen name="DetailPerizinan" component={DetailPerizinan} />
      <Stack.Screen name="DetailPerizinanWK" component={DetailPerizinanWK} />
      <Stack.Screen name="LihatPerizinan" component={LihatPerizinan} />
    </Stack.Navigator>
  );
}

export default WaliKelasRoutes;
