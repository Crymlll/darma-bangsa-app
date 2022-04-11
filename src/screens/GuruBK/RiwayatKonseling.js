import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, Modal, Pressable, Image, TouchableOpacity} from 'react-native';
import {konselingMenuStyle} from '../../components/Styles/konselingStyle';
import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');

import { firebase } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import Ionicons from 'react-native-vector-icons/Ionicons';

const JadwalKonseling = ({ route ,navigation}) => {

  let data = route.params;

  let [arrKonseling , setArrKonseling] = useState([]);

  let fetchKonseling = async () => {
      try {
        await firestore()
        .collection('konseling')
        .where('guru', '==', data.user.nama)
        .where('status', 'in', ['on going', 'declined', 'done'])
        .get()
        .then(querySnapshot => {
          if(querySnapshot.docs.length == 0){
            // alert('Anda belum memiliki konseling');
            console.log('Anda belum memiliki konseling');
            // console.log(data.user.nama)
          }
          else{
            querySnapshot.docs.map(doc => {
              // console.log(doc.data());
              doc.data().id = doc.id;
              // console.log(doc.data());
              setArrKonseling(arrKonseling => [...arrKonseling, doc.data()]);
            });
          }
        })
      }
      catch(error){
        console.log(error);
      }
  }

  let dateFormatDayMonthYear = (date) => {
    let dateFormat = moment(date).format('dddd, D MMMM YYYY');
    return dateFormat;
  }

  let tampilkanKonseling = () => {
    if(arrKonseling.length > 0){
      return arrKonseling.map((item, index) => {
        // console.log(item)
        return(
          <TouchableOpacity 
            style={konselingMenuStyle.konselingBox}
            key={index}
            onPress={() => navigation.navigate('DetailKonseling', {konseling: item, user: data.user})}
          >
            <View style={konselingMenuStyle.textKonseling}>
              <Text style={konselingMenuStyle.text}>{item.nama}</Text>
              <Text style={konselingMenuStyle.text}>{item.permasalahan}</Text>
              <Text style={konselingMenuStyle.text}>{item.tanggal}</Text>
              <Text style={konselingMenuStyle.text}>{item.deskripsi}</Text>
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
          onPress={() => navigation.navigate('MenuGuruBKScreen', data.user)}
        > 
          <Ionicons name="ios-chevron-back" style={konselingMenuStyle.Icon}/>
        </TouchableOpacity> 
        <Text style={konselingMenuStyle.judul}>Riwayat Konseling</Text>
      </View>
      <View style={konselingMenuStyle.box}>
        {tampilkanKonseling()}
      </View>
    </View>
  )
}

export default JadwalKonseling