import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuGuruKonselingScreen from '../screens/GuruKonseling/MenuGuruKonselingScreen';

const Stack = createNativeStackNavigator();

function GuruKonselingRoutes() {
  return (
    <Stack.Navigator initialRouteName='MenuGuruKonselingScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name="MenuGuruKonselingScreen" component={MenuGuruKonselingScreen} />
    </Stack.Navigator>
  )
}

export default GuruKonselingRoutes