import React,{ useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, Modal, Pressable, Image, TouchableOpacity} from 'react-native';
import { perizinanMenuStyle } from '../../components/Styles/perizinanStyle';

import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');

import Ionicons from 'react-native-vector-icons/Ionicons';

import { firebase } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const IzinDispensasi = ({route, navigation}) => {

    let data = route.params;

    let [arrDispensasi , setArrDispensasi] = useState([]);
    let [email , setEmail] = useState('');
    let[nama,  setNama] = useState('');


    let fetchDispensasi = async () => {
        await firebase.auth().onAuthStateChanged((user) => {
        try {
            firestore()
            .collection('perizinan')
            .where('email', '==', user.email)
            .get()
            .then(querySnapshot => {
            if(querySnapshot.docs.length == 0){
                console.log('Anda belum memiliki perizinan');
            }
            else{
                setEmail(user.email);
                setNama(querySnapshot.docs[0].data().nama);
                querySnapshot.docs.map(doc => {
                setArrDispensasi(arrDispensasi => [...arrDispensasi, doc.data()]);
                });
            }
            })
        }
        catch(error){
            console.log(error);
        }
        })
    }

    let tampilkanDispensasi = () => {
        if(arrDispensasi.length > 0){
        return arrDispensasi.map((item, index) => {
            return(
            <TouchableOpacity 
                style={perizinanMenuStyle.dispensasiBox}
                key={index}
                onPress={() => navigation.navigate('DetailPerizinan', {perizinan : item})}
            >
                <View style={perizinanMenuStyle.textDispensasi}>
                <Text style={perizinanMenuStyle.text}>{item.nama}</Text>
                <Text style={perizinanMenuStyle.text}>{item.kegiatan}</Text>
                <Text style={perizinanMenuStyle.text}>{item.tanggal}</Text>
                <Text style={perizinanMenuStyle.text}>{item.status}</Text>
                </View>
            </TouchableOpacity>
            )
        })
        }
        else{
        return(
            <View>
                <Text style={perizinanMenuStyle.text}>Anda belum memiliki Dispensasi</Text>
            </View>
        )
        }
    }

    useEffect(() => {
        fetchDispensasi();
        setArrDispensasi([]);
    }, []);

  return (
    <View style={perizinanMenuStyle.container}>
      <View style={perizinanMenuStyle.blueBox}>
        <TouchableOpacity style={perizinanMenuStyle.iconBox}
          onPress={() => navigation.goBack()}
        > 
          <Ionicons name="ios-chevron-back" style={perizinanMenuStyle.Icon}/>
        </TouchableOpacity> 
        <Text style={perizinanMenuStyle.judul}>Perizinan Siswa</Text>
      </View>
      <View style={perizinanMenuStyle.box}>
        {tampilkanDispensasi()}
      </View>
      <View style={perizinanMenuStyle.bottom}>
        <TouchableOpacity style={perizinanMenuStyle.button}
          onPress={() => navigation.navigate('BuatPerizinan', {userData: data.userData})}
        >
          <Ionicons name="ios-add-circle" style={perizinanMenuStyle.Icon2}/>
          <Text style={perizinanMenuStyle.textButton}>Buat Perizinan</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default IzinDispensasi