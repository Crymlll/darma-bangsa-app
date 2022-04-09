import React from 'react'
import { View, Text, Button, StyleSheet, Modal, Pressable, Image, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {beritaDetailStyle} from '../../components/Styles/beritaStyle';

function BeritaDetail({route, navigation}) {
  
  const data = route.params;

  return (
    <View style={beritaDetailStyle.container}>
      <View style={beritaDetailStyle.blueBox}>
        <TouchableOpacity style={beritaDetailStyle.iconBox}
          onPress={() => navigation.goBack()}
        > 
          <Ionicons name="ios-chevron-back" style={beritaDetailStyle.Icon}/>
        </TouchableOpacity> 
        <Text style={beritaDetailStyle.judul}>Berita Sekolah</Text>
      </View>
      <Image source={require('../../images/sekolah.jpg')} style={beritaDetailStyle.gambar} />
      <View style={beritaDetailStyle.box}>
        <Text style={beritaDetailStyle.judulBerita}>{data.judul}</Text>
        <Text style={beritaDetailStyle.kontenBerita}>{data.konten}</Text>
      </View>
    </View>
  )
}

export default BeritaDetail