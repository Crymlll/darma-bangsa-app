import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Modal,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {perizinanMenuStyle} from '../../components/Styles/perizinanStyle';

import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');

import Ionicons from 'react-native-vector-icons/Ionicons';

import {firebase} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const IzinDispensasi = ({route, navigation}) => {
  let data = route.params;

  let [arrDispensasi, setArrDispensasi] = useState([]);
  let [email, setEmail] = useState('');
  let [nama, setNama] = useState('');

  let fetchDispensasi = async () => {
    await firebase.auth().onAuthStateChanged(user => {
      try {
        firestore()
          .collection('perizinan')
          .where('email', '==', user.email)
          .get()
          .then(querySnapshot => {
            if (querySnapshot.docs.length == 0) {
              console.log('Anda belum memiliki perizinan');
            } else {
              setEmail(user.email);
              setNama(querySnapshot.docs[0].data().nama);
              querySnapshot.docs.map(doc => {
                setArrDispensasi(arrDispensasi => [
                  ...arrDispensasi,
                  doc.data(),
                ]);
              });
            }
          });
      } catch (error) {
        console.log(error);
      }
    });
  };

  let tampilkanDispensasi = () => {
    if (arrDispensasi.length > 0) {
      return arrDispensasi.map((item, index) => {
        return (
          <TouchableOpacity
            style={perizinanMenuStyle.dispensasiBox}
            key={index}
            onPress={() =>
              navigation.navigate('DetailPerizinan', {perizinan: item})
            }>
            <View style={perizinanMenuStyle.textDispensasi}>
              <Text style={perizinanMenuStyle.text}>Nama : {item.nama}</Text>
              <Text style={perizinanMenuStyle.text}>
                Kegiatan : {item.kegiatan}
              </Text>
              <Text style={perizinanMenuStyle.text}>
                Tanggal : {item.tanggal}
              </Text>
              {status(item.status)}
            </View>
          </TouchableOpacity>
        );
      });
    } else {
      return (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5%',
          }}>
          <Text style={perizinanMenuStyle.text}>
            Anda belum pernah Dispensasi
          </Text>
        </View>
      );
    }
  };

  let status = status => {
    if (status == 'ditolak') {
      return (
        <View
          style={{
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: 'white',
            }}>
            {EveryFirstEachLetterCapitalized(status)}
          </Text>
        </View>
      );
    } else if (status == 'disetujui') {
      return (
        <View
          style={{
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: 'white',
            }}>
            {EveryFirstEachLetterCapitalized(status)}
          </Text>
        </View>
      );
    } else if (status == 'menunggu') {
      return (
        <View
          style={{
            backgroundColor: 'yellow',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: 'black',
            }}>
            {EveryFirstEachLetterCapitalized(status)}
          </Text>
        </View>
      );
    }
  };

  let EveryFirstEachLetterCapitalized = str => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  useEffect(() => {
    fetchDispensasi();
    setArrDispensasi([]);
  }, []);

  return (
    <View style={perizinanMenuStyle.container}>
      <View style={perizinanMenuStyle.blueBox}>
        <TouchableOpacity
          style={perizinanMenuStyle.iconBox}
          onPress={() => navigation.goBack()}>
          <Ionicons name="ios-chevron-back" style={perizinanMenuStyle.Icon} />
        </TouchableOpacity>
        <Text style={perizinanMenuStyle.judul}>Izin Dispensasi</Text>
      </View>
      <View style={perizinanMenuStyle.box}>
        <ScrollView>{tampilkanDispensasi()}</ScrollView>
      </View>
      <View style={perizinanMenuStyle.bottom}>
        <TouchableOpacity
          style={perizinanMenuStyle.button}
          onPress={() =>
            navigation.navigate('BuatPerizinan', {userData: data.userData})
          }>
          <Ionicons name="ios-add-circle" style={perizinanMenuStyle.Icon2} />
          <Text style={perizinanMenuStyle.textButton}>Buat Perizinan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IzinDispensasi;
