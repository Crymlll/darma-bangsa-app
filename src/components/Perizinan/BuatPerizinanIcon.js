import React from 'react';
import {View, Text} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import {BuatPerizinanIconStyle} from '../Styles/perizinanStyle';

function BuatPerizinanIcon() {
  return (
    <View style={BuatPerizinanIconStyle.box}>
      <Feather name="user-check" style={BuatPerizinanIconStyle.Icon} />
      <Text style={BuatPerizinanIconStyle.text}>Perizinan Siswa</Text>
    </View>
  );
}

export default BuatPerizinanIcon;
