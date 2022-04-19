import React from 'react';
import {View, Text} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import {LihatPerizinanIconStyle} from '../Styles/perizinanStyle';

function LihatPerizinanIcon() {
  return (
    <View style={LihatPerizinanIconStyle.box}>
      <Feather name="user-check" style={LihatPerizinanIconStyle.Icon} />
      <Text style={LihatPerizinanIconStyle.text}>Lihat Perizinan Siswa</Text>
    </View>
  );
}

export default LihatPerizinanIcon;
