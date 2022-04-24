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
import {perizinanMenuStyle} from '../../components/Styles/perizinanStyle';

import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');

import Ionicons from 'react-native-vector-icons/Ionicons';

import {firebase} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const DetailPerizinan = ({route, navigation}) => {
  let data = route.params;

  let test = () => {
    console.log(data.perizinan.nama);
  };

  let button = () => {
    if (data.perizinan.status == 'menunggu') {
      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: '5%',
          }}>
          <TouchableOpacity
            style={perizinanMenuStyle.btnAccept}
            onPress={() => {
              updateData(data.perizinan.id, 'disetujui');
            }}>
            <Text style={perizinanMenuStyle.textAccept}>Setujui</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={perizinanMenuStyle.btnDecline}
            onPress={() => {
              updateData(data.perizinan.id, 'ditolak');
            }}>
            <Text style={perizinanMenuStyle.textDecline}>Tolak</Text>
          </TouchableOpacity>
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

  let updateData = async (id, status) => {
    try {
      await firestore()
        .collection('perizinan')
        .doc(id)
        .update({
          status: status,
        })
        .then(() => {
          navigation.navigate('PerizinanSiswa', {userData: data.userData});
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={perizinanMenuStyle.container}>
      <View style={perizinanMenuStyle.blueBox}>
        <TouchableOpacity
          style={perizinanMenuStyle.iconBox}
          onPress={() => navigation.goBack()}>
          <Ionicons name="ios-chevron-back" style={perizinanMenuStyle.Icon} />
        </TouchableOpacity>
        <Text style={perizinanMenuStyle.judul}>Detail Perizinan</Text>
      </View>
      <View style={perizinanMenuStyle.box2}>
        <View>
          <Text style={{marginTop: '5%'}}></Text>
          <Text style={perizinanMenuStyle.textPadding}>
            Nama : {data.perizinan.nama}
          </Text>
          <Text style={perizinanMenuStyle.textPadding}>
            Kelas : {data.perizinan.kelas}
          </Text>
          <Text style={perizinanMenuStyle.textPadding}>
            NISN : {data.perizinan.no_induk}
          </Text>
          <Text style={perizinanMenuStyle.textPadding}>
            Kegiatan : {data.perizinan.kegiatan}
          </Text>
          <Text style={perizinanMenuStyle.textPadding}>
            Tanggal : {data.perizinan.tanggal}
          </Text>
          <Text style={perizinanMenuStyle.textPadding}>
            Alasan : {data.perizinan.alasan}
          </Text>
          <Text style={perizinanMenuStyle.textPadding}>
            Status : {status(data.perizinan.status)}
          </Text>
        </View>
        {button()}
      </View>
    </View>
  );
};

export default DetailPerizinan;
