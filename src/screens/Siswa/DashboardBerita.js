import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, Modal, Pressable, Image} from 'react-native';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';

import {beritaStyle} from '../../components/Styles/beritaStyle';

import Ionicons from 'react-native-vector-icons/Ionicons';



function DashboardBerita({navigation}) {

  let [arrBerita, setArrBerita] = useState([]);

  let fetchBerita = async () => {
    try {
      await firestore()
      .collection('berita')
      // Filter results
      .orderBy('urutan', 'desc')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          setArrBerita(arrBerita => [...arrBerita, doc.data()]);
        });
      });
    }catch(e){
      console.log(e);
    }
  }

  let tampilkanBerita = () => {
    if(arrBerita.length > 0){
        return arrBerita.map((item, index) => {
          return (
            <View 
              style={beritaStyle.beritaBox} 
              key={index}
            >
              <View style={beritaStyle.logo}>
                <Image source={require('../../images/logo.png')} style={beritaStyle.gambar} />
              </View>
              <View style={beritaStyle.textBerita}>
                <Text style={beritaStyle.beritaJudul}>{item.judul}</Text>
                <Text style={beritaStyle.beritaKonten}>{item.konten}</Text>
                <Text
                  style={beritaStyle.textLink}
                  // onPress={navigation.navigate('BeritaDetail', {judul: item.judul, konten: item.konten})}
                >Lihat Selengkapnya</Text>
              </View>
            </View>
          )
        })
      }
  }


useEffect(() => {
    fetchBerita();
    setArrBerita([]);
}, [])



  return (
    <View style={beritaStyle.container}>
      <View style={beritaStyle.blueBox}>
        <Pressable style={beritaStyle.iconBox}
          onPress={() => navigation.goBack()}
        > 
          <Ionicons name="ios-chevron-back" style={beritaStyle.Icon}/>
        </Pressable> 
        <Text style={beritaStyle.judul}>Berita Sekolah</Text>
      </View>
      <View style={beritaStyle.box}>
        {tampilkanBerita()}
      </View>
    </View>
  )
}

export default DashboardBerita


// let fecthBerita =() => {
//   database()
//   .ref('berita')
//   .limitToLast(3)
//   .on('value', (snapshot) => {
//     let berita = snapshot.val();
//     berita= berita.reverse()
//     // console.log(berita)
//     for(let i=0;i<3;i++){
//       arrBerita.push(berita[i])
//     }
//   })

//   setTimeout(() => {
//     console.log(arrBerita)
//     if(arrBerita.length > 0){
//       return arrBerita.map((item, index) => {
//         return (
//           <View style={beritaStyle.beritaBox} key={index}>
//               <Text style={beritaStyle.beritaJudul}>{item.judul}</Text>
//               <Text style={beritaStyle.beritaKonten}>{item.konten}</Text>
//           </View>
//         )
//       })
//     }
//   }, 100)


// }