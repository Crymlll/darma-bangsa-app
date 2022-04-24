import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login/LoginScreen';
import LoginFormScreen from '../screens/Login/LoginFormScreen';
import ResetPassword from '../screens/Login/ResetPassword';

const Stack = createNativeStackNavigator();

function LoginRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="LoginFormScreen" component={LoginFormScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
}

export default LoginRoutes;
