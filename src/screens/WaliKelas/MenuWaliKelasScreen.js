import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Modal, Pressable, Image, Button, TouchableOpacity} from 'react-native';
// import { AuthContext } from '../../db/AuthProvider';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import menu2Style from '../../components/Styles/menu2Style';


import KonselingIcon from '../../components/Konseling/KonselingIcon';
import JadwalKonselingIcon from '../../components/Konseling/JadwalKonselingIcon';
import BeritaIcon from '../../components/Berita/BeritaIcon';
import PerizinanSiswaIcon from '../../components/Perizinan/PerizinanSiswaIcon';


function MenuWaliKelasScreen({ route , navigation}) {
  // const {user, logout} = useContext(AuthContext)
  // const user = auth.currentUser;

  const data = route.params;

  // const [userData, setUserData] = useState([]);
  let [arrBerita, setArrBerita] = useState([]);

  let logout = async () => {
    try {
      await auth().signOut();
      navigation.navigate('Login');
    } catch (e) {
      console.log(e);
    }
  }

  let fetchBerita = async () => {
    try {
      await firestore()
      .collection('berita')
      // Filter results
      .orderBy('urutan', 'desc')
      .limit(1)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          setArrBerita(arrBerita => [...arrBerita, doc.data()]);
        });
      });
    }catch(e){
      console.log(e);
    }
  }

  let tampilkanBerita = () => {
    if(arrBerita.length > 0){
        return arrBerita.map((item, index) => {
          return (
            <TouchableOpacity 
              style={menu2Style.beritaBox} 
              onPress={() => navigation.navigate('BeritaDetail', {
                id: item.id,
                judul: item.judul,
                konten: item.konten,
              })}
              key={index}
            >
              <View style={menu2Style.textBerita}>
                <Text style={menu2Style.beritaJudul}>{item.judul}</Text>
                <Text style={menu2Style.beritaKonten}>{item.konten.substring(0,40)}</Text>
              </View>
            </TouchableOpacity>
          )
        })
      }
  }

  useEffect(() => {
    fetchBerita();
    setArrBerita([]);
}, [])
  
  return (
    <View style={menu2Style.container}>
      <View style={menu2Style.blueBox}>
        <View style={menu2Style.header}>
          <Text style={menu2Style.sekolahText}>SMA Darma Bangsa</Text>
          <View style={menu2Style.iconBar}>
            <Ionicons name="ios-notifications-sharp" size={30} color="white" />
            <Ionicons name="ios-settings-sharp" size={30} color="white" />
          </View>
        </View>
        <View style={menu2Style.box}>
          <View style={menu2Style.profile}>
            <View style={menu2Style.profileDetail}>
              <View style= {menu2Style.profilePhotoFrame}>
                <Image source={require('../../images/profile-example.png')} style={menu2Style.photoRounded}></Image>
              </View>
              <View style={menu2Style.profileText}>
                <Text style={menu2Style.textNama}>{data.nama}</Text>
                <Text style={menu2Style.text}>{data.kelas}</Text>
                <Text style={menu2Style.text}>NIP : {data.no_induk}</Text>
              </View>
            </View>   
            <TouchableOpacity
            onPress={() => logout()}
            >
              <SimpleLineIcons 
                name="logout"     
                size={20} 
                color="black" 
                style={menu2Style.logout}
              />
            </TouchableOpacity>
          </View>      
          <View style={menu2Style.dispensasiArea}>
            <Text style={menu2Style.dispensasiText}>Wali Kelas:</Text>
            <Text>Wali Kelas {data.kelas}</Text>
          </View>   
        </View>
      </View>
      <View style={menu2Style.bottomBox}> 
        <View style={menu2Style.infoEvent}>
          <Text style={menu2Style.textJudul}>Info Penting Hari Ini</Text>
          <View style={menu2Style.listEvent}>
            {tampilkanBerita()}
          </View>
        </View>
        <View style={menu2Style.informasi}>
          <Text style={menu2Style.textJudul}>Informasi Lengkap</Text>
          <View style={menu2Style.listInformasi}>
            <View style={menu2Style.boxInformasi}>
              <TouchableOpacity
                onPress={() => navigation.navigate('PerizinanSiswa', {userData: data})}
                style={menu2Style.konselingIcon}
              >
                <PerizinanSiswaIcon/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('DashboardBerita')}
                style={menu2Style.konselingIcon}
              >
                <BeritaIcon/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default MenuWaliKelasScreen