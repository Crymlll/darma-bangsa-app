import React, { useContext, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import {sloginStyle} from '../../components/Styles/loginStyle';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../../db/AuthProvider';

function LoginSiswaScreen({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    ///siswa
    // const email = 'aulia@gmail.com'
    // const password = 'auliarahmanz'

    const login = async (email, password) => {
        try {
          await auth().signInWithEmailAndPassword(email, password);
        } catch (e) {
          console.log(e);
        }
      }


    let AddData = () => {
        firestore()
        .collection('users')
        .add({
            email: 'admin@gmail.com',
            kelas: 30,
            nama: 'Ada Lovelace',
            no_induk: '3245354355',
            role: 'ADMIN',
        })
        .then(() => {
            console.log('User added!');
        });
    }
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../images/Background.png')} resizeMode="cover" style={sloginStyle.background}></Image>
            <View style={sloginStyle.box}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: '20%', color:'black' }}>Sign in</Text>
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

export default LoginSiswaScreen