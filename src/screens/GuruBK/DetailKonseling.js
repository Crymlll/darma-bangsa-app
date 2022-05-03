import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {konselingMenuStyle} from '../../components/Styles/konselingStyle';

import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');

import Ionicons from 'react-native-vector-icons/Ionicons';

import firestore from '@react-native-firebase/firestore';

const DetailKonseling = ({route, navigation}) => {
  let data = route.params;

  let button = () => {
    if (data.konseling.status == 'on going') {
      return (
        <TouchableOpacity
          style={konselingMenuStyle.btnAccept}
          onPress={() => {
            updateData(data.konseling.id, 'done');
          }}>
          <Text>Selesaikan Konseling</Text>
        </TouchableOpacity>
      );
    }
  };

  let updateData = async (id, status) => {
    try {
      await firestore()
        .collection('konseling')
        .doc(id)
        .update({
          status: status,
        })
        .then(() => {
          navigation.navigate('RiwayatKonseling', {user: data.user});
        });
    } catch (error) {
      console.log(error);
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

  return (
    <View style={konselingMenuStyle.container}>
      <View style={konselingMenuStyle.blueBox}>
        <TouchableOpacity
          style={konselingMenuStyle.iconBox}
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons name="ios-chevron-back" style={konselingMenuStyle.Icon} />
        </TouchableOpacity>
        <Text style={konselingMenuStyle.judul}>Detail Konseling</Text>
      </View>
      <View style={konselingMenuStyle.boxDetail}>
        {/* <Text>{data.konseling.id}</Text> */}
        <Text style={konselingMenuStyle.textPadding}>
          Nama : {data.konseling.nama}
        </Text>
        <Text style={konselingMenuStyle.textPadding}>
          Permasalahan :{' '}
          {EveryFirstEachLetterCapitalized(data.konseling.permasalahan)}
        </Text>
        <Text style={konselingMenuStyle.textPadding}>
          Tanggal : {data.konseling.tanggal}
        </Text>
        <Text style={konselingMenuStyle.textPadding}>
          Deskripsi : {data.konseling.deskripsi}
        </Text>
        <Text style={konselingMenuStyle.textPadding}>
          Status : {status(data.konseling.status)}
        </Text>
        <View style={{marginTop: '5%'}}>{button()}</View>
      </View>
    </View>
  );
};

export default DetailKonseling;
