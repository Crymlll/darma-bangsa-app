import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
// import { AuthContext } from '../../db/AuthProvider';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import menuStyle from '../../components/Styles/menuStyle';

import KonselingIcon from '../../components/Konseling/KonselingIcon';
import JadwalKonselingIcon from '../../components/Konseling/JadwalKonselingIcon';
import BeritaIcon from '../../components/Berita/BeritaIcon';
import PerizinanIcon from '../../components/Perizinan/PerizinanIcon';
import LihatPerizinanIcon from '../../components/Perizinan/LihatPerizinanIcon';
function MenuGuruBKScreen({route, navigation}) {
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
  };

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
    } catch (e) {
      console.log(e);
    }
  };

  let tampilkanBerita = () => {
    if (arrBerita.length > 0) {
      return arrBerita.map((item, index) => {
        return (
          <TouchableOpacity
            style={menuStyle.beritaBox}
            onPress={() =>
              navigation.navigate('BeritaDetail', {
                id: item.id,
                judul: item.judul,
                konten: item.konten,
              })
            }
            key={index}>
            <View style={menuStyle.textBerita}>
              <Text style={menuStyle.beritaJudul}>{item.judul}</Text>
              <Text style={menuStyle.beritaKonten}>
                {item.konten.substring(0, 40)}
              </Text>
            </View>
          </TouchableOpacity>
        );
      });
    }
  };

  useEffect(() => {
    fetchBerita();
    setArrBerita([]);
  }, []);

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
              <View style={menuStyle.profilePhotoFrame}>
                <Image
                  source={require('../../images/profile-example.png')}
                  style={menuStyle.photoRounded}></Image>
              </View>
              <View style={menuStyle.profileText}>
                <Text style={menuStyle.textNama}>{data.nama}</Text>
                <Text style={menuStyle.text}>Guru Bimbingan Konseling</Text>
                <Text style={menuStyle.text}>NIP : {data.no_induk}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => logout()}>
              <SimpleLineIcons
                name="logout"
                size={20}
                color="black"
                style={menuStyle.logout}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={menuStyle.bottomBox}>
        <View style={menuStyle.infoEvent}>
          <Text style={menuStyle.textJudul}>Info Penting Hari Ini</Text>
          <View style={menuStyle.listEvent}>{tampilkanBerita()}</View>
        </View>
        <View style={menuStyle.informasi}>
          <Text style={menuStyle.textJudul}>Informasi Lengkap</Text>
          <View style={menuStyle.listInformasi}>
            <View style={menuStyle.boxInformasi}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('DashboardKonseling', {user: data})
                }
                style={menuStyle.konselingIcon}>
                <KonselingIcon />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RiwayatKonseling', {user: data})
                }
                style={menuStyle.konselingIcon}>
                <JadwalKonselingIcon />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('DashboardBerita')}
                style={menuStyle.konselingIcon}>
                <BeritaIcon />
              </TouchableOpacity>
            </View>
            <View style={menuStyle.boxInformasi}>
              <TouchableOpacity
                onPress={() => navigation.navigate('LihatPerizinan')}
                style={menuStyle.konselingIcon}>
                <LihatPerizinanIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default MenuGuruBKScreen;
