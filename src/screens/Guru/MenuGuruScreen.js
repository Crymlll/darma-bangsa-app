import React from 'react'

import { View, Text, StyleSheet, Modal, Pressable, Image} from 'react-native';



function MenuGuruScreen() {
  return (
    <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="LoginSiswaScreen" component={LoginSiswaScreen} />
      <Stack.Screen name="LoginGuruScreen" component={LoginGuruScreen} />
    </Stack.Navigator>
  )
}

export default MenuGuruScreen