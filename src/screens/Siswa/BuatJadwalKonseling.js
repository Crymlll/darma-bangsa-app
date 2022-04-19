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
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {firebase} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {konselingMenuStyle} from '../../components/Styles/konselingStyle';

const BuatJadwalKonseling = ({route, navigation}) => {
  let data = route.params;
  let newDate = new Date(Date.now());

  const [dataKonseling, setDataKonseling] = useState({
    guru: '',
    nama: data.nama,
    permasalahan: '',
    tanggal: moment(newDate).format('dddd, D MMMM YYYY'),
    jam: '',
    deskripsi: '',
    status: 'on pending',
    email: data.email,
    created_on: newDate,
  });

  const [guruKonseling, setGuruKonseling] = useState([]);

  const clickHandler = textInput => {
    return value => {
      setDataKonseling({...dataKonseling, [textInput]: value});
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
    setDataKonseling({
      ...dataKonseling,
      tanggal: dateFormatDayMonthYear(value),
    });
  };

  let AddData = value => {
    firestore()
      .collection('konseling')
      .add(value)
      .then(() => {
        console.log('Data Konseling added!');
      });
  };

  let dateFormatDayMonthYear = date => {
    let dateFormat = moment(date).format('dddd, D MMMM YYYY');
    return dateFormat;
  };

  let fetchGuruKonseling = async () => {
    try {
      await firestore()
        .collection('users')
        .where('role', '==', 'guru konseling')
        .get()
        .then(querySnapshot => {
          querySnapshot.docs.map(doc => {
            doc.data().id = doc.id;
            setGuruKonseling(guruKonseling => [...guruKonseling, doc.data()]);
          });
        });
    } catch (e) {
      console.log(e);
    }
  };

  let tampilkanGuruKonseling = () => {
    if (guruKonseling.length > 0) {
      return guruKonseling.map((item, index) => {
        return <Picker.Item label={item.nama} value={item.nama} />;
      });
    }
  };

  useEffect(() => {
    fetchGuruKonseling();
  }, []);

  return (
    <View style={konselingMenuStyle.container}>
      <View style={konselingMenuStyle.blueBox}>
        <TouchableOpacity
          style={konselingMenuStyle.iconBox}
          onPress={() => navigation.goBack()}>
          <Ionicons name="ios-chevron-back" style={konselingMenuStyle.Icon} />
        </TouchableOpacity>
        <Text style={konselingMenuStyle.judul}>Buat Jadwal Konseling</Text>
      </View>
      <View style={konselingMenuStyle.box}>
        <Text>Halo, {data.nama} </Text>
        <Text>
          Kamu bisa ceritain masalah kamu baik akademik dan non akademik, akan
          kami bantu untuk mencari solusinya
        </Text>
        <View style={konselingMenuStyle.youngBlueBox}>
          <Text>
            Hanya Menerima Konseling pada hari sekolah (senin s/d jumat jam
            07:00 - 15:00)
          </Text>
        </View>

        <View style={konselingMenuStyle.package}>
          <Text style={konselingMenuStyle.text2}>Guru BK</Text>
          <View style={konselingMenuStyle.formDateTime}>
            <Picker
              selectedValue={dataKonseling.guru}
              style={{width: '80%', color: '#000000', marginLeft: '5%'}}
              onValueChange={itemValue =>
                setDataKonseling({...dataKonseling, guru: itemValue})
              }>
              <Picker.Item label="Pilih Guru Konseling" value="0" />
              {tampilkanGuruKonseling()}
            </Picker>
          </View>
        </View>

        <View style={konselingMenuStyle.package}>
          <Text style={konselingMenuStyle.text2}>Permasalahan</Text>
          <View style={konselingMenuStyle.formDateTime}>
            <Picker
              selectedValue={dataKonseling.permasalahan}
              style={{width: '80%', color: '#000000', marginLeft: '5%'}}
              onValueChange={itemValue =>
                setDataKonseling({...dataKonseling, permasalahan: itemValue})
              }>
              <Picker.Item label="Pilih Permasalahan" value="0" />
              <Picker.Item label="Akademik" value="akademik" />
              <Picker.Item label="Non Akademik" value="non akademik" />
            </Picker>
          </View>
        </View>

        <View style={konselingMenuStyle.package}>
          <Text style={konselingMenuStyle.text2}>Tanggal Konseling</Text>
          <View style={konselingMenuStyle.formDateTime}>
            {!isPickerShow && (
              <View style={konselingMenuStyle.btnContainer}></View>
            )}
            {/* The date picker */}
            {isPickerShow && (
              <DateTimePicker
                value={date}
                mode={'date'}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                is24Hour={true}
                onChange={onChange}
                style={konselingMenuStyle.datePicker}
              />
            )}
            <View style={konselingMenuStyle.pickedDateContainer}>
              <Text onPress={showPicker} style={konselingMenuStyle.pickedDate}>
                Tanggal Dipilih : {moment(date).format('D MMMM YYYY')}
              </Text>
            </View>
          </View>
        </View>

        <View style={konselingMenuStyle.package}>
          <Text style={konselingMenuStyle.text2}>Jam Konseling</Text>
          <View style={konselingMenuStyle.formDateTime}>
            <Picker
              selectedValue={dataKonseling.jam}
              style={{width: '80%', color: '#000000', marginLeft: '5%'}}
              onValueChange={itemValue =>
                setDataKonseling({...dataKonseling, jam: itemValue})
              }>
              <Picker.Item label="Pilih Jam Konseling" value="0" />
              <Picker.Item label="9:30 - 10:15" value="9.30" />
              <Picker.Item label="10:30 - 11:15" value="10.30" />
              <Picker.Item label="11:30 - 12:15" value="11.30" />
              <Picker.Item label="13:30 - 14:15" value="13.30" />
            </Picker>
          </View>
        </View>

        <View style={konselingMenuStyle.package}>
          <Text style={konselingMenuStyle.text2}>Deskripsi Masalah</Text>
          <View style={konselingMenuStyle.formSingle}>
            <TextInput
              style={konselingMenuStyle.input}
              placeholder="Tuliskan Permasalahan"
              underlineColorAndroid="transparent"
              placeholderTextColor={'#c4c4c4'}
              onChangeText={clickHandler('deskripsi')}
            />
          </View>
        </View>

        <TouchableOpacity
          style={konselingMenuStyle.btn}
          onPress={() => {
            // console.log(dataKonseling)
            AddData(dataKonseling);
            navigation.navigate('DashboardKonseling');
          }}>
          <Text style={konselingMenuStyle.btnText}>Buat Jadwal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BuatJadwalKonseling;
