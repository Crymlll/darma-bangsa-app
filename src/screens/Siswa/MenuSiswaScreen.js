import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Modal, Pressable, Image, Button, TouchableOpacity} from 'react-native';
// import { AuthContext } from '../../db/AuthProvider';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import menuStyle from '../../components/Styles/menuStyle';


import KonselingIcon from '../../components/Konseling/KonselingIcon';
import JadwalKonselingIcon from '../../components/Konseling/JadwalKonselingIcon';
import BeritaIcon from '../../components/Berita/BeritaIcon';
import PerizinanIcon from '../../components/Perizinan/PerizinanIcon';

import { firebase } from '@react-native-firebase/app';


function MenuSiswaScreen({ route , navigation}) {

  const [userData, setUserData] = useState([]);
  let [arrBerita, setArrBerita] = useState([]);
  let [email, setEmail] = useState('');
  let [nama, setNama] = useState('');
  let [dispensasi, setDispensasi] = useState('');

  let logout = async () => {
    try {
      await auth().signOut();
    } catch (e) {
      console.log(e);
    }
  }

  let fetchData = async () => {

    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        try {
          firestore()
          .collection('users')
          // Filter results
          .where('email', '==', user.email)
          .get()
          .then(querySnapshot => {

            try {
              firestore()
              .collection('perizinan')
              // Filter results
              .where('email', '==', user.email)
              .where('status', '==', 'disetujui')
              .where('tanggal', '==', moment(new Date(Date.now())).format('dddd, D MMMM YYYY'))
              .get()
              .then(querySnapshot => {
                if(querySnapshot.docs.length > 0){
                  console.log('dispen')
                  setDispensasi('dispensasi');
                }
                else{
                  console.log('ngga dispen')
                  setDispensasi('tidak dispensasi');
                }
              });
            }catch(e){
              console.log(e);
            }

            setEmail(user.email);
            setNama(querySnapshot.docs[0].data().nama);
            setUserData(querySnapshot.docs[0].data());
          });
        }catch(e){
          console.log(e);
        }
      }
    });
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
              style={menuStyle.beritaBox} 
              onPress={() => navigation.navigate('BeritaDetail', {
                id: item.id,
                judul: item.judul,
                konten: item.konten,
              })}
              key={index}
            >
              <View style={menuStyle.textBerita}>
                <Text style={menuStyle.beritaJudul}>{item.judul}</Text>
                <Text style={menuStyle.beritaKonten}>{item.konten.substring(0,40)}</Text>
              </View>
            </TouchableOpacity>
          )
        })
      }
  }

  let tampilkanDispensasi = () => {
    if(dispensasi === 'dispensasi'){
      return (
        <View style={menuStyle.dispensasiTextArea}>
          <Octicons name="dot-fill" size={20} color="green" />
          <Text style={menuStyle.textDispensasi}>Sedang Dispensasi</Text>
        </View>
      )
    }
    else if(dispensasi === 'tidak dispensasi'){
      return (
        <View style={menuStyle.dispensasiTextArea}>
          <Octicons name="dot-fill" size={20} color="red" />
          <Text style={menuStyle.textDispensasi}>Tidak Dispensasi</Text>
        </View>
      )
    }
  }


  useEffect(() => {
    fetchData();
    fetchBerita();
    setArrBerita([]);
    setDispensasi('');
}, [])
  
  return (
    <View style={menuStyle.container}>
      <View style={menuStyle.blueBox}>
        <View style={menuStyle.header}>
          <Text style={menuStyle.sekolahText}>SMA Darma Bangsa</Text>
          <View style={menuStyle.iconBar}>
            <Ionicons name="ios-notifications-sharp" size={30} color="white" />
            <Ionicons name="ios-settings-sharp" size={30} color="white" />
          </View>
        </View>
        <View style={menuStyle.box}>
          <View style={menuStyle.profile}>
            <View style={menuStyle.profileDetail}>
              <View style= {menuStyle.profilePhotoFrame}>
                <Image source={require('../../images/profile-example.png')} style={menuStyle.photoRounded}></Image>
              </View>
              <View style={menuStyle.profileText}>
                <Text style={menuStyle.textNama}>{userData.nama}</Text>
                <Text style={menuStyle.text}>{userData.kelas}</Text>
                <Text style={menuStyle.text}>NISN : {userData.no_induk}</Text>
              </View>
            </View>   
            <TouchableOpacity
            onPress={() => logout()}
            >
              <SimpleLineIcons 
                name="logout"     
                size={20} 
                color="black" 
                style={menuStyle.logout}
              />
            </TouchableOpacity>
          </View>
          <View style={menuStyle.dispensasiArea}>
            <Text style={menuStyle.dispensasiText}>Dispensasi Hari Ini</Text>
            {tampilkanDispensasi()}
          </View>          
        </View>
      </View>
      <View style={menuStyle.bottomBox}> 
        <View style={menuStyle.infoEvent}>
          <Text style={menuStyle.textJudul}>Info Penting Hari Ini</Text>
          <View style={menuStyle.listEvent}>
            {tampilkanBerita()}
          </View>
        </View>
        <View style={menuStyle.informasi}>
          <Text style={menuStyle.textJudul}>Informasi Lengkap</Text>
          <View style={menuStyle.listInformasi}>
            <View style={menuStyle.boxInformasi}>
              <TouchableOpacity
                onPress={() => navigation.navigate('DashboardKonseling', {userData})}
                style={menuStyle.konselingIcon}
              >
                <KonselingIcon/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('BuatJadwalKonseling',{ email: email, nama: nama })}
                style={menuStyle.konselingIcon}
              >
                <JadwalKonselingIcon/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('DashboardBerita')}
                style={menuStyle.konselingIcon}
              >
                <BeritaIcon/>
              </TouchableOpacity>
            </View>
            <View style={menuStyle.boxInformasi}>
              <TouchableOpacity
                onPress={() => navigation.navigate('IzinDispensasi', {userData})}
                style={menuStyle.konselingIcon}
              >
                <PerizinanIcon/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default MenuSiswaScreen