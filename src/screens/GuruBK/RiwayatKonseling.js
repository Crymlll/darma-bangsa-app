import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {konselingMenuStyle} from '../../components/Styles/konselingStyle';
import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');

import {firebase} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import Ionicons from 'react-native-vector-icons/Ionicons';

const JadwalKonseling = ({route, navigation}) => {
  let data = route.params;

  let [arrKonseling, setArrKonseling] = useState([]);

  let fetchKonseling = async () => {
    try {
      await firestore()
        .collection('konseling')
        .where('guru', '==', data.user.nama)
        .where('status', 'in', ['on going', 'declined', 'done'])
        .get()
        .then(querySnapshot => {
          if (querySnapshot.docs.length == 0) {
            // alert('Anda belum memiliki konseling');
            console.log('Anda belum memiliki konseling');
            // console.log(data.user.nama)
          } else {
            querySnapshot.docs.map(doc => {
              // console.log(doc.data());
              doc.data().id = doc.id;
              // console.log(doc.data());
              setArrKonseling(arrKonseling => [...arrKonseling, doc.data()]);
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  let dateFormatDayMonthYear = date => {
    let dateFormat = moment(date).format('dddd, D MMMM YYYY');
    return dateFormat;
  };

  let tampilkanKonseling = () => {
    if (arrKonseling.length > 0) {
      return arrKonseling.map((item, index) => {
        // console.log(item)
        return (
          <TouchableOpacity
            style={konselingMenuStyle.konselingBox}
            key={index}
            onPress={() =>
              navigation.navigate('DetailKonseling', {
                konseling: item,
                user: data.user,
              })
            }>
            <View style={konselingMenuStyle.textKonseling}>
              <Text style={konselingMenuStyle.text}>{item.nama}</Text>
              <Text style={konselingMenuStyle.text}>{item.permasalahan}</Text>
              <Text style={konselingMenuStyle.text}>{item.tanggal}</Text>
              <Text style={konselingMenuStyle.text}>{item.deskripsi}</Text>
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
          <Text style={konselingMenuStyle.text}>
            Anda Belum Memiliki Riwayat Konseling
          </Text>
        </View>
      );
    }
  };

  let EveryFirstEachLetterCapitalized = string => {
    return string
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  let status = status => {
    if (status == 'declined') {
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
    } else if (status == 'done') {
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
    } else if (status == 'on going') {
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
    } else if (status == 'on pending') {
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

  useEffect(() => {
    fetchKonseling();
    setArrKonseling([]);
  }, []);

  return (
    <View style={konselingMenuStyle.container}>
      <View style={konselingMenuStyle.blueBox}>
        <TouchableOpacity
          style={konselingMenuStyle.iconBox}
          onPress={() => navigation.navigate('MenuGuruBKScreen', data.user)}>
          <Ionicons name="ios-chevron-back" style={konselingMenuStyle.Icon} />
        </TouchableOpacity>
        <Text style={konselingMenuStyle.judul}>Riwayat Konseling</Text>
      </View>
      <View style={konselingMenuStyle.box3}>
        <ScrollView>{tampilkanKonseling()}</ScrollView>
      </View>
    </View>
  );
};

export default JadwalKonseling;
