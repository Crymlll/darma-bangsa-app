import React, {useState, useEffect} from 'react'
import { View, Text, Button, StyleSheet, Modal, Pressable, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');

import { perizinanMenuStyle } from '../../components/Styles/perizinanStyle';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { firebase } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function PerizinanSiswa({route, navigation}) {

  let data = route.params;

  let [arrPerizinan , setArrPerizinan] = useState([]);
  let [email , setEmail] = useState('');
  let[nama,  setNama] = useState('');

  let fetchPerizinan = async () => {
    await firebase.auth().onAuthStateChanged((user) => {
      try {
        firestore()
        .collection('perizinan')
        .where('kelas', '==', data.userData.kelas)
        .where('status', '==', 'menunggu')
        .get()
        .then(querySnapshot => {
          if(querySnapshot.docs.length == 0){
            setEmail(user.email);
            setNama(data.userData.nama);
            // alert('Anda belum memiliki perizinan');
            console.log('Anda belum memiliki perizinan');
          }
          else{
            setEmail(user.email);
            // console.log(data.userData.nama)
            setNama(querySnapshot.docs[0].data().nama);
            querySnapshot.docs.map(doc => {
                doc.data().id = doc.id;
                setArrPerizinan(arrPerizinan => [...arrPerizinan, doc.data()]);
            });
          }
        })
      }
      catch(error){
        console.log(error);
      }
    })
  }

  let tampilkanPerizinan = () => {
    if(arrPerizinan.length > 0){
      return arrPerizinan.map((item, index) => {
        return(
          <TouchableOpacity 
            style={perizinanMenuStyle.perizinanBox}
            key={index}
            onPress={() => navigation.navigate('DetailPerizinan', {perizinan : item, userData: data.userData})}
          >
            <View style={perizinanMenuStyle.textPerizinan}>
              <Text style={perizinanMenuStyle.text}>{item.nama}</Text>
              <Text style={perizinanMenuStyle.text}>{item.no_induk}</Text>
              <Text style={perizinanMenuStyle.text}>{item.tanggal}</Text>
              <Text style={perizinanMenuStyle.text}>{item.kegiatan}</Text>
              <Text style={perizinanMenuStyle.text}>{item.status}</Text>
            </View>
          </TouchableOpacity>
        )
      })
    }
    else{
      return(
        <View>
            <Text style={perizinanMenuStyle.text}>Anda belum memiliki perizinan</Text>
        </View>
      )
    }
  }

  useEffect(() => {
    fetchPerizinan();
    setArrPerizinan([]);
  }, []);

  return (
    <View style={perizinanMenuStyle.container}>
      <View style={perizinanMenuStyle.blueBox}>
        <TouchableOpacity style={perizinanMenuStyle.iconBox}
          onPress={() => navigation.goBack()}
        > 
          <Ionicons name="ios-chevron-back" style={perizinanMenuStyle.Icon}/>
        </TouchableOpacity> 
        <Text style={perizinanMenuStyle.judul}>Perizinan</Text>
      </View>
      <View style={perizinanMenuStyle.box}>
        {tampilkanPerizinan()}
      </View>
    </View>
  )
}

export default PerizinanSiswa