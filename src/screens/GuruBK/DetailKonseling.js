import React from 'react'
import { View, Text, Button, StyleSheet, Modal, Pressable, Image, TouchableOpacity} from 'react-native';

import {konselingMenuStyle} from '../../components/Styles/konselingStyle';

import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');

import Ionicons from 'react-native-vector-icons/Ionicons';

import { firebase } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const DetailKonseling = ({route, navigation}) => {

    let data = route.params;

    let button = () => {
        if(data.konseling.status == 'on going'){
            return(
                <TouchableOpacity
                    onPress={() => { updateData(data.konseling.id, 'done') }}
                >
                    <Text>Selesaikan Konseling</Text>
                </TouchableOpacity>
            )
        }
    }


    let updateData = async (id, status) => {
        try {
            await firestore()
            .collection('konseling')
            .doc(id)
            .update({
                status: status
            })
            .then(() => {
                navigation.navigate('RiwayatKonseling', {user: data.user});
            })
        }
        catch(error){
            console.log(error);
        }
    }


  return (

    <View style={konselingMenuStyle.container}>
      <View style={konselingMenuStyle.blueBox}>
        <TouchableOpacity style={konselingMenuStyle.iconBox}
          onPress={() => { navigation.goBack() }}
        > 
          <Ionicons name="ios-chevron-back" style={konselingMenuStyle.Icon}/>
        </TouchableOpacity> 
        <Text style={konselingMenuStyle.judul}>Riwayat Konseling</Text>
      </View>
      <View style={konselingMenuStyle.box}>
        {/* <Text>{data.konseling.id}</Text> */}
        <Text>{data.konseling.nama}</Text>
        <Text>{data.konseling.permasalahan}</Text>
        <Text>{data.konseling.tanggal}</Text>
        <Text>{data.konseling.deskripsi}</Text>
        <Text>{data.konseling.status}</Text>

        {button()}
      </View>
    </View>

    
  )
}

export default DetailKonseling