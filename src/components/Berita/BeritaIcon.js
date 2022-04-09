import React from 'react'
import {View, Text, Button, StyleSheet, Modal, Pressable, Image} from 'react-native';

import {beritaIconStyle} from '../Styles/beritaStyle'

import Feather from 'react-native-vector-icons/Feather'

function BeritaIcon() {
  return (
    <View style={ beritaIconStyle.box }>
        <Feather name="volume-2" style={beritaIconStyle.Icon}/>
        <Text style={beritaIconStyle.text}>Berita Sekolah</Text>
    </View>
  )
}

export default BeritaIcon