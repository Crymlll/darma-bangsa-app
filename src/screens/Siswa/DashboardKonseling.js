import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');

import {konselingMenuStyle} from '../../components/Styles/konselingStyle';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {firebase} from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

function DashboardKonseling({route, navigation}) {
  let data = route.params;

  let [arrKonseling, setArrKonseling] = useState([]);
  let [email, setEmail] = useState('');
  let [nama, setNama] = useState('');

  //   let dateFormatDayMonthYear = (date) => {
  //     let dateFormat = moment(date).format('dddd, D MMMM YYYY');
  //     return dateFormat;
  // }

  let fetchKonseling = async () => {
    await firebase.auth().onAuthStateChanged(user => {
      try {
        firestore()
          .collection('konseling')
          .where('email', '==', user.email)
          // .orderBy('created_on', 'desc')
          .get()
          .then(querySnapshot => {
            if (querySnapshot.docs.length == 0) {
              setEmail(user.email);
              setNama(data.userData.nama);
              // alert('Anda belum memiliki konseling');
              console.log('Anda belum memiliki konseling');
            } else {
              setEmail(user.email);
              // console.log(data.userData.nama)
              setNama(querySnapshot.docs[0].data().nama);
              querySnapshot.docs.map(doc => {
                setArrKonseling(arrKonseling => [...arrKonseling, doc.data()]);
              });
            }
          });
      } catch (error) {
        console.log(error);
      }
    });
  };

  let tampilkanKonseling = () => {
    if (arrKonseling.length > 0) {
      return arrKonseling.map((item, index) => {
        return (
          <TouchableOpacity style={konselingMenuStyle.konselingBox} key={index}>
            <View style={konselingMenuStyle.textKonseling}>
              <Text style={konselingMenuStyle.text}>Guru : {item.guru}</Text>
              <Text style={konselingMenuStyle.text}>
                Permasalahan :{' '}
                {EveryFirstEachLetterCapitalized(item.permasalahan)}
              </Text>
              <Text style={konselingMenuStyle.text}>
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
          <Text style={konselingMenuStyle.text}>
            Anda belum pernah konseling
          </Text>
        </View>
      );
    }
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

  let EveryFirstEachLetterCapitalized = str => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
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
          onPress={() => navigation.goBack()}>
          <Ionicons name="ios-chevron-back" style={konselingMenuStyle.Icon} />
        </TouchableOpacity>
        <Text style={konselingMenuStyle.judul}>Konseling</Text>
      </View>
      <View style={konselingMenuStyle.box}>
        <ScrollView>{tampilkanKonseling()}</ScrollView>
      </View>
      <View style={konselingMenuStyle.bottom}>
        <TouchableOpacity
          style={konselingMenuStyle.button}
          onPress={() =>
            navigation.navigate('BuatJadwalKonseling', {
              email: email,
              nama: nama,
            })
          }>
          <Ionicons name="ios-add-circle" style={konselingMenuStyle.Icon2} />
          <Text style={konselingMenuStyle.textButton}>
            Buat Jadwal Konseling
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DashboardKonseling;
