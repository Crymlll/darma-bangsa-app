import React from 'react'
import { View, Text } from 'react-native'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import {perizinanIconStyle} from '../Styles/perizinanStyle'

function PerizinanIcon() {
  return (
    <View style={ perizinanIconStyle.box }>
        <SimpleLineIcons name="graduation" style={perizinanIconStyle.Icon}/>
        <Text style={perizinanIconStyle.text}>Izin Dispensasi</Text>
    </View>
  )
}

export default PerizinanIcon