import React from 'react'
import { View, Text, Button, StyleSheet, Modal, Pressable, Image} from 'react-native';

import { globalStyle } from '../Styles/globalStyle';

import Ionicons from 'react-native-vector-icons/Ionicons';

function GlobalBackIcon() {
  return (
    <Pressable style={globalStyle.iconBox}> 
        <Ionicons name="ios-chevron-back" style={globalStyle.Icon}/>
    </Pressable> 
  )
}

export { GlobalBackIcon }