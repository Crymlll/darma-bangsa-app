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
import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');

import {perizinanMenuStyle} from '../../components/Styles/perizinanStyle';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {firebase} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {date} from 'yup';

function LihatPerizinan({navigation}) {
  let newDate = new Date(Date.now());

  let [arrPerizinan, setArrPerizinan] = useState([]);

  let fetchPerizinan = async () => {
    await firebase.auth().onAuthStateChanged(user => {
      try {
        firestore()
          .collection('perizinan')
          .where('status', '==', 'disetujui')
          .where('tanggal', '==', moment(newDate).format('dddd, D MMMM YYYY'))
          .get()
          .then(querySnapshot => {
            if (querySnapshot.docs.length == 0) {
              console.log('Tidak Ada Perizinan Siswa Hari Ini');
            } else {
              querySnapshot.docs.map(doc => {
                doc.data().id = doc.id;
                setArrPerizinan(arrPerizinan => [...arrPerizinan, doc.data()]);
              });
            }
          });
      } catch (error) {
        console.log(error);
      }
    });
  };

  let tampilkanPerizinan = () => {
    if (arrPerizinan.length > 0) {
      return arrPerizinan.map((item, index) => {
        return (
          <TouchableOpacity
            style={perizinanMenuStyle.perizinanBox}
            key={index}
            onPress={() =>
              navigation.navigate('DetailPerizinan', {
                perizinan: item,
              })
            }>
            <View style={perizinanMenuStyle.textPerizinan}>
              <Text style={perizinanMenuStyle.text}>Nama : {item.nama}</Text>
              <Text style={perizinanMenuStyle.text}>
                NISN : {item.no_induk}
              </Text>
              <Text style={perizinanMenuStyle.text}>
                Tanggal : {item.tanggal}
              </Text>
              <Text style={perizinanMenuStyle.text}>
                Kegiatan : {item.kegiatan}
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
            Tidak ada siswa yang memiliki perizinan hari ini
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
    fetchPerizinan();
    setArrPerizinan([]);
  }, []);

  return (
    <View style={perizinanMenuStyle.container}>
      <View style={perizinanMenuStyle.blueBox}>
        <TouchableOpacity
          style={perizinanMenuStyle.iconBox}
          onPress={() => navigation.goBack()}>
          <Ionicons name="ios-chevron-back" style={perizinanMenuStyle.Icon} />
        </TouchableOpacity>
        <Text style={perizinanMenuStyle.judul}>Lihat Perizinan Siswa</Text>
      </View>
      <View style={perizinanMenuStyle.box3}>
        <ScrollView>{tampilkanPerizinan()}</ScrollView>
      </View>
    </View>
  );
}

export default LihatPerizinan;
