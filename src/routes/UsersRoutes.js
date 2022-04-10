import React, { useState, useEffect, useRef } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginRoutes from './LoginRoutes';
import SiswaRoutes from './SiswaRoutes';
import WaliKelasRoutes from './WaliKelasRoutes';
import GuruRoutes from './GuruRoutes';
import GuruBKRoutes from './GuruBKRoutes';
import Global from '../screens/Global';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/app';

const Stack = createNativeStackNavigator();

const Users = ({navigation}) => {
  let screen = () => {
      firebase.auth().onAuthStateChanged((user) => {
        try {
          firestore()
          .collection('users')
          // Filter results
          .where('email', '==', user.email)
          .get()
          .then(querySnapshot => {
            if(querySnapshot.docs[0].data().role == 'guru'){
              navigation.navigate('Guru', { 
                screen: 'MenuGuruScreen',
                params: { 
                  email: querySnapshot.docs[0].data().email,
                  nama: querySnapshot.docs[0].data().nama,
                  no_induk: querySnapshot.docs[0].data().no_induk,
                  kelas: querySnapshot.docs[0].data().kelas,
                  role: querySnapshot.docs[0].data().role,
                  bidang: querySnapshot.docs[0].data().bidang,
                  },
              });
            }
            else if(querySnapshot.docs[0].data().role == 'guru konseling'){
              navigation.navigate('GuruBK', { 
                screen: 'MenuGuruBKScreen',
                params: { 
                  email: querySnapshot.docs[0].data().email,
                  nama: querySnapshot.docs[0].data().nama,
                  no_induk: querySnapshot.docs[0].data().no_induk,
                  kelas: querySnapshot.docs[0].data().kelas,
                  role: querySnapshot.docs[0].data().role,
                  bidang: querySnapshot.docs[0].data().bidang,
                  },
              });
            }
            else if(querySnapshot.docs[0].data().role == 'wali kelas'){
              navigation.navigate('WaliKelas', { 
                screen: 'MenuWaliKelasScreen',
                params: { 
                  email: querySnapshot.docs[0].data().email,
                  nama: querySnapshot.docs[0].data().nama,
                  no_induk: querySnapshot.docs[0].data().no_induk,
                  kelas: querySnapshot.docs[0].data().kelas,
                  role: querySnapshot.docs[0].data().role,
                  bidang: querySnapshot.docs[0].data().bidang,
                  },
              });
            }
            else if(querySnapshot.docs[0].data().role == 'siswa'){
              navigation.navigate('Siswa', {
                screen: 'MenuSiswaScreen',
                params: {
                    email: querySnapshot.docs[0].data().email,
                    nama: querySnapshot.docs[0].data().nama,
                    no_induk: querySnapshot.docs[0].data().no_induk,
                    kelas: querySnapshot.docs[0].data().kelas,
                    role: querySnapshot.docs[0].data().role,
                    bidang: querySnapshot.docs[0].data().bidang,
                },
            });
            }
          });
        }catch(e){
          console.log(e);
        }
      })
  }

useEffect(() => {
    screen();
}, [])

  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Global" component={Global}  />
        <Stack.Screen name="Login" component={LoginRoutes}  />
        <Stack.Screen name="Siswa" component={SiswaRoutes} />
        <Stack.Screen name="Guru" component={GuruRoutes} />
        <Stack.Screen name="WaliKelas" component={WaliKelasRoutes} />
        <Stack.Screen name="GuruBK" component={GuruBKRoutes} />
      </Stack.Navigator>
        
  )
}

export default Users