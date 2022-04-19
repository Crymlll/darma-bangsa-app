import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Modal,
  Pressable,
  Image,
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
              <Text style={perizinanMenuStyle.text}>{item.nama}</Text>
              <Text style={perizinanMenuStyle.text}>{item.no_induk}</Text>
              <Text style={perizinanMenuStyle.text}>{item.tanggal}</Text>
              <Text style={perizinanMenuStyle.text}>{item.kegiatan}</Text>
              <Text style={perizinanMenuStyle.text}>{item.status}</Text>
            </View>
          </TouchableOpacity>
        );
      });
    } else {
      return (
        <View>
          <Text style={perizinanMenuStyle.text}>
            Tidak ada siswa yang memiliki perizinan hari ini
          </Text>
        </View>
      );
    }
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
      <View style={perizinanMenuStyle.box}>{tampilkanPerizinan()}</View>
    </View>
  );
}

export default LihatPerizinan;
