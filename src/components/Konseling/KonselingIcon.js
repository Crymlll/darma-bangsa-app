import React from 'react'
import { View, Text } from 'react-native'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import {konselingIconStyle} from '../Styles/konselingStyle'

function KonselingIcon() {
  return (
    <View style={ konselingIconStyle.box }>
        <SimpleLineIcons name="graduation" style={konselingIconStyle.Icon}/>
        <Text style={konselingIconStyle.text}>Konseling</Text>
    </View>
  )
}

export default KonselingIcon