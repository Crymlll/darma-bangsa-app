import React from 'react'
import { View, Text } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {perizinanIconStyle} from '../Styles/perizinanStyle'

function PerizinanIcon() {
  return (
    <View style={ perizinanIconStyle.box }>
        <MaterialCommunityIcons name="file-document-edit-outline" style={perizinanIconStyle.Icon}/>
        <Text style={perizinanIconStyle.text}>Izin Dispensasi</Text>
    </View>
  )
}

export default PerizinanIcon