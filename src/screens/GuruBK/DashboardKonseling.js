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

const DashboardKonseling = ({route, navigation}) => {

  let data = route.params;

  let [arrKonseling , setArrKonseling] = useState([]);

  let fetchKonseling = async () => {
      try {
        await firestore()
        .collection('konseling')
        .where('guru', '==', data.user.nama)
        .where('status', '==', 'on pending')
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

  let updateData = async (id, status) => {
    try{
      console.log(id, status)
      await firestore()
      .collection('konseling')
      .doc(id)
      .update({
        status: status
      })
      .then(() => {
        console.log('Konseling updated!');
        navigation.navigate('RiwayatKonseling', data);
      });
    }catch(error){
      console.log(error);
    }
  }

  let tampilkanKonseling = () => {
    if(arrKonseling.length > 0){
      return arrKonseling.map((item, index) => {
        // console.log(item)
        return(
          <TouchableOpacity 
            style={konselingMenuStyle.konselingBox}
            key={index}
          >
            <View style={konselingMenuStyle.textKonseling}>
              <Text style={konselingMenuStyle.text}>{item.nama}</Text>
              <Text style={konselingMenuStyle.text}>{item.permasalahan}</Text>
              <Text style={konselingMenuStyle.text}>{dateFormatDayMonthYear(item.tanggal)}</Text>
              <Text style={konselingMenuStyle.text}>{item.deskripsi}</Text>
              <View style={konselingMenuStyle.btn}>
                <TouchableOpacity
                  style={konselingMenuStyle.btnAccept}
                  onPress={ () => {updateData(item.id, 'on going')} }
                >
                  <Text style={konselingMenuStyle.textAccept}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={konselingMenuStyle.btnDecline}
                  onPress={ () => {updateData(item.id, 'declined')} }
                >
                  <Text style={konselingMenuStyle.textDecline}>Deceline</Text>
                </TouchableOpacity>
              </View>
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
    </View>
  )
}

export default DashboardKonseling