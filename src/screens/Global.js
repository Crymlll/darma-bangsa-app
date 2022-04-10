import React, {useEffect, useState, useRef} from 'react'
import { View, Text, StyleSheet, Modal, Pressable, Image, Button, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/app';

import { globalScreenStyle } from '../components/Styles/globalStyle';


const Global = ({navigation}) => {
    let [userName, setUserName] = useState('');

    let screen = () => {
        firebase.auth().onAuthStateChanged((user) => {
            try {
            firestore()
            .collection('users')
            // Filter results
            .where('email', '==', user.email)
            .get()
            .then(querySnapshot => {
                setUserName(querySnapshot.docs[0].data().nama);
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../images/Background.png')} resizeMode="cover" style={globalScreenStyle.background}></Image>
        <Text style={globalScreenStyle.title}>Darma Bangsa App</Text>
        <Text style={globalScreenStyle.header}>Smart, Dynamic, and Bright</Text>
        <View style={globalScreenStyle.logo}>
            <Image source={require('../images/logo.png')}/>
        </View>

        <Text style={globalScreenStyle.header}>Hi, {userName}</Text>
        <TouchableOpacity
            style={globalScreenStyle.iconBox}
            onPress={() => {screen()}}
        >
            <Text style={{ color:'white' }}>Ke Menu</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Global