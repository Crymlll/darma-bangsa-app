import React from 'react'
import { View, Text } from 'react-native'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import {perizinanIconStyle} from '../Styles/perizinanStyle'

function PerizinanSiswaIcon() {
  return (
    <View style={ perizinanIconStyle.box }>
        <SimpleLineIcons name="graduation" style={perizinanIconStyle.Icon}/>
        <Text style={perizinanIconStyle.text}>Perizinan Siswa</Text>
    </View>
  )
}

export default PerizinanSiswaIcon