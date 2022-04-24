import React from 'react';
import {View, Text} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {jadwalKonselingStyle} from '../Styles/konselingStyle';

function JadwalKonselingIcon() {
  return (
    <View style={jadwalKonselingStyle.box}>
      <AntDesign name="calendar" style={jadwalKonselingStyle.Icon} />
      <Text style={jadwalKonselingStyle.text}>Jadwal Konseling</Text>
    </View>
  );
}

export default JadwalKonselingIcon;
