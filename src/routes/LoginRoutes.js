import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login/LoginScreen';
import LoginSiswaScreen from '../screens/Login/LoginSiswaScreen';
import LoginGuruScreen from '../screens/Login/LoginGuruScreen';


const Stack = createNativeStackNavigator();

function LoginRoutes() {
  return (
    <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="LoginSiswaScreen" component={LoginSiswaScreen} />
      <Stack.Screen name="LoginGuruScreen" component={LoginGuruScreen} />
    </Stack.Navigator>
  )
}

export default LoginRoutes