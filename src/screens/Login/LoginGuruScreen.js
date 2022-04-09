import React, { useContext, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import {sloginStyle} from '../../components/Styles/loginStyle';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../../db/AuthProvider';


function LoginGuruScreen({ navigation }) {

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  const [userData, setUserData] = useState([]);

  //guru biasa
  // const email = 'ulfi@gmail.com'
  // const password = 'auliarahmanz'

  //guru konseling
  // const email = 'auliarz@gmail.com'
  // const password = 'auliarahmanz'

  //wali kelas
  const email = 'auliarahmanz@gmail.com'
  const password = 'auliarahmanz'

  const login = async (email, password) => {
      try {
        try {
          await firestore()
          .collection('users')
          // Filter results
          .where('email', '==', email)
          .get()
          .then(querySnapshot => {
            console.log(querySnapshot.docs[0].data())
            auth().signInWithEmailAndPassword(email, password);
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
          });
        }catch(e){
          console.log(e);
        }
        

        
        
        
      } catch (e) {
        console.log(e);
      }
    }

  
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../images/Background.png')} resizeMode="cover" style={sloginStyle.background}></Image>
          <View style={sloginStyle.box}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: '20%', color:'black' }}>Sign in teacher</Text>
              <TextInput
                  style={sloginStyle.input}
                  placeholder="Email"
                  value={email.value}
                  underlineColorAndroid="transparent"
                  placeholderTextColor={'#c4c4c4'}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCompleteType="email"
                  onChangeText={(text) => setEmail(text)}
              />
              <TextInput
                  style={sloginStyle.input}
                  placeholder="Password"
                  value={password.value}
                  underlineColorAndroid="transparent"
                  placeholderTextColor={'#c4c4c4'}
                  autoCapitalize="none"
                  secureTextEntry
                  onChangeText={(text) => setPassword(text)}
              />

          <TouchableOpacity 
              mode="contained" 
              // onPress={onLoginPressed}
              onPress={() => login(email, password)}
          >
              <Text style={sloginStyle.ButtonSubmit}>Submit</Text>
          </TouchableOpacity>
          </View>
      </View>
  )
}

export default LoginGuruScreen