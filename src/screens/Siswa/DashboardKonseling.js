import React, {useState, useEffect} from 'react'
import { View, Text, Button, StyleSheet, Modal, Pressable, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');

import { konselingMenuStyle } from '../../components/Styles/konselingStyle';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { firebase } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function DashboardKonseling({route, navigation}) {

  let data = route.params;

  let [arrKonseling , setArrKonseling] = useState([]);
  let [email , setEmail] = useState('');
  let[nama,  setNama] = useState('');

//   let dateFormatDayMonthYear = (date) => {
//     let dateFormat = moment(date).format('dddd, D MMMM YYYY');
//     return dateFormat;
// }

  let fetchKonseling = async () => {
    await firebase.auth().onAuthStateChanged((user) => {
      try {
        firestore()
        .collection('konseling')
        .where('email', '==', user.email)
        .get()
        .then(querySnapshot => {
          if(querySnapshot.docs.length == 0){
            setEmail(user.email);
            setNama(data.userData.nama);
            // alert('Anda belum memiliki konseling');
            console.log('Anda belum memiliki konseling');
          }
          else{
            setEmail(user.email);
            // console.log(data.userData.nama)
            setNama(querySnapshot.docs[0].data().nama);
            querySnapshot.docs.map(doc => {
              setArrKonseling(arrKonseling => [...arrKonseling, doc.data()]);
            });
          }
        })
      }
      catch(error){
        console.log(error);
      }
    })
  }

  let tampilkanKonseling = () => {
    if(arrKonseling.length > 0){
      return arrKonseling.map((item, index) => {
        return(
          <TouchableOpacity 
            style={konselingMenuStyle.konselingBox}
            key={index}
          >
            <View style={konselingMenuStyle.textKonseling}>
              <Text style={konselingMenuStyle.text}>{item.guru}</Text>
              <Text style={konselingMenuStyle.text}>{item.permasalahan}</Text>
              <Text style={konselingMenuStyle.text}>{item.tanggal}</Text>
              <Text style={konselingMenuStyle.text}>{item.status}</Text>
            </View>
          </TouchableOpacity>
        )
      })
    }
    else{
      return(
        <View>
            <Text style={konselingMenuStyle.text}>Anda belum memiliki konseling</Text>
        </View>
      )
    }
  }

  useEffect(() => {
    fetchKonseling();
    setArrKonseling([]);
  }, []);

  return (
    <View style={konselingMenuStyle.container}>
      <View style={konselingMenuStyle.blueBox}>
        <TouchableOpacity style={konselingMenuStyle.iconBox}
          onPress={() => navigation.goBack()}
        > 
          <Ionicons name="ios-chevron-back" style={konselingMenuStyle.Icon}/>
        </TouchableOpacity> 
        <Text style={konselingMenuStyle.judul}>Konseling</Text>
      </View>
      <View style={konselingMenuStyle.box}>
        {tampilkanKonseling()}
      </View>
      <View style={konselingMenuStyle.bottom}>
        <TouchableOpacity style={konselingMenuStyle.button}
          onPress={() => navigation.navigate('BuatJadwalKonseling', {email: email, nama: nama})}
        >
          <Ionicons name="ios-add-circle" style={konselingMenuStyle.Icon2}/>
          <Text style={konselingMenuStyle.textButton}>Buat Jadwal Konseling</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DashboardKonseling