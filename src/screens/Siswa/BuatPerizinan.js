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
  TextInput,
  ScrollView,
} from 'react-native';
import {perizinanMenuStyle} from '../../components/Styles/perizinanStyle';

import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');

import Ionicons from 'react-native-vector-icons/Ionicons';

import {firebase} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const BuatPerizinan = ({route, navigation}) => {
  let data = route.params;

  let newDate = new Date(Date.now());
  const [dataPerizinan, setDataPerizinan] = useState({
    nama: data.userData.nama,
    kegiatan: '',
    tanggal: moment(newDate).format('dddd, D MMMM YYYY'),
    alasan: '',
    email: data.userData.email,
    kelas: data.userData.kelas,
    no_induk: data.userData.no_induk,
    status: 'menunggu',
    created_on: newDate,
  });

  const clickHandler = textInput => {
    return value => {
      setDataPerizinan({...dataPerizinan, [textInput]: value});
    };
  };

  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  const showPicker = () => {
    setIsPickerShow(true);
  };
  const onChange = (event, value) => {
    setIsPickerShow(false);
    setDate(value);
    setDataPerizinan({
      ...dataPerizinan,
      tanggal: dateFormatDayMonthYear(value),
    });
  };

  let AddData = value => {
    firestore()
      .collection('perizinan')
      .add(value)
      .then(() => {
        console.log('Data Perizinan added!');
      });
  };

  let dateFormatDayMonthYear = date => {
    let dateFormat = moment(date).format('dddd, D MMMM YYYY');
    return dateFormat;
  };

  return (
    <View style={perizinanMenuStyle.container}>
      <View style={perizinanMenuStyle.blueBox}>
        <TouchableOpacity
          style={perizinanMenuStyle.iconBox}
          onPress={() => navigation.goBack()}>
          <Ionicons name="ios-chevron-back" style={perizinanMenuStyle.Icon} />
        </TouchableOpacity>
        <Text style={perizinanMenuStyle.judul}>Buat Jadwal Perizinan</Text>
      </View>
      <View style={perizinanMenuStyle.box}>
        <ScrollView>
          <View style={perizinanMenuStyle.youngBlueBox}>
            <Text style={perizinanMenuStyle.textHeader2}>
              Izin dispensasi hanya diterima jika mempunyai alasan dan bukti
              yang jelas
            </Text>
          </View>

          <View style={perizinanMenuStyle.package}>
            <Text style={perizinanMenuStyle.text2}>Jenis Kegiatan</Text>
            <View style={perizinanMenuStyle.formSingle}>
              <TextInput
                style={perizinanMenuStyle.input}
                placeholder="Kegiatan"
                underlineColorAndroid="transparent"
                placeholderTextColor={'#c4c4c4'}
                onChangeText={clickHandler('kegiatan')}
              />
            </View>
          </View>

          <View style={perizinanMenuStyle.package}>
            <Text style={perizinanMenuStyle.text2}>Tanggal Perizinan</Text>
            <View style={perizinanMenuStyle.formDateTime}>
              {!isPickerShow && (
                <View style={perizinanMenuStyle.btnContainer}></View>
              )}
              {/* The date picker */}
              {isPickerShow && (
                <DateTimePicker
                  value={date}
                  mode={'date'}
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  is24Hour={true}
                  onChange={onChange}
                  style={perizinanMenuStyle.datePicker}
                />
              )}
              <View style={perizinanMenuStyle.pickedDateContainer}>
                <Text
                  onPress={showPicker}
                  style={perizinanMenuStyle.pickedDate}>
                  Tanggal Dipilih : {moment(date).format('D MMMM YYYY')}
                </Text>
              </View>
            </View>
          </View>

          <View style={perizinanMenuStyle.package}>
            <Text style={perizinanMenuStyle.text2}>Alasan Dispensasi</Text>
            <View style={perizinanMenuStyle.formSingle}>
              <TextInput
                style={perizinanMenuStyle.input}
                placeholder="Alasan"
                underlineColorAndroid="transparent"
                placeholderTextColor={'#c4c4c4'}
                onChangeText={clickHandler('alasan')}
              />
            </View>
          </View>

          <View style={perizinanMenuStyle.btnContainer}>
            <TouchableOpacity
              style={perizinanMenuStyle.btn}
              onPress={() => {
                console.log(data);
                // console.log(dataPerizinan);
                AddData(dataPerizinan);
                navigation.navigate('DetailPerizinan', {
                  userData: data.userData,
                  perizinan: dataPerizinan,
                });
              }}>
              <Text style={perizinanMenuStyle.btnText}>Buat Izin</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default BuatPerizinan;
