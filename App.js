// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginRoutes from './src/routes/LoginRoutes';
import SiswaRoutes from './src/routes/SiswaRoutes';
import WaliKelasRoutes from './src/routes/WaliKelasRoutes';
import GuruBKRoutes from './src/routes/GuruBKRoutes';
import GuruKonselingRoutes from './src/routes/GuruKonselingRoutes';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginRoutes}  />
        <Stack.Screen name="Siswa" component={SiswaRoutes} />
        <Stack.Screen name="WaliKelas" component={WaliKelasRoutes} />
        <Stack.Screen name="GuruBK" component={GuruBKRoutes} />
        <Stack.Screen name="GuruKonseling" component={GuruKonselingRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;