import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DashboardBerita from '../components/Berita/DashboardBerita';
import BeritaDetail from '../components/Berita/BeritaDetail';

import LihatPerizinan from '../components/Perizinan/LihatPerizinan';
import DetailPerizinan from '../components/Perizinan/DetailPerizinan';

import MenuGuruBKScreen from '../screens/GuruBK/MenuGuruBKScreen';
import DashboardKonseling from '../screens/GuruBK/DashboardKonseling';
import RiwayatKonseling from '../screens/GuruBK/RiwayatKonseling';
import DetailKonseling from '../screens/GuruBK/DetailKonseling';

const Stack = createNativeStackNavigator();

function GuruBKRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="MenuGuruBKScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MenuGuruBKScreen" component={MenuGuruBKScreen} />
      <Stack.Screen name="DashboardBerita" component={DashboardBerita} />
      <Stack.Screen name="BeritaDetail" component={BeritaDetail} />
      <Stack.Screen name="DashboardKonseling" component={DashboardKonseling} />
      <Stack.Screen name="RiwayatKonseling" component={RiwayatKonseling} />
      <Stack.Screen name="DetailKonseling" component={DetailKonseling} />
      <Stack.Screen name="DetailPerizinan" component={DetailPerizinan} />
      <Stack.Screen name="LihatPerizinan" component={LihatPerizinan} />
    </Stack.Navigator>
  );
}

export default GuruBKRoutes;
