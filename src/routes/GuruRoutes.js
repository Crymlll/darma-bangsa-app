import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LihatPerizinan from '../components/Perizinan/LihatPerizinan';
import DetailPerizinan from '../components/Perizinan/DetailPerizinan';

import MenuGuruScreen from '../screens/Guru/MenuGuruScreen';
import DashboardBerita from '../components/Berita/DashboardBerita';
import BeritaDetail from '../components/Berita/BeritaDetail';

const Stack = createNativeStackNavigator();

function GuruRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="MenuGuruScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MenuGuruScreen" component={MenuGuruScreen} />
      <Stack.Screen name="DashboardBerita" component={DashboardBerita} />
      <Stack.Screen name="BeritaDetail" component={BeritaDetail} />
      <Stack.Screen name="DetailPerizinan" component={DetailPerizinan} />
      <Stack.Screen name="LihatPerizinan" component={LihatPerizinan} />
    </Stack.Navigator>
  );
}

export default GuruRoutes;
