import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import loginStyle from '../../components/Styles/loginStyle';

function LoginScreen({navigation}) {
  return (
    <View>
      <View style={loginStyle.box}>

          <Text>
            Login as a
          </Text>
          <TouchableOpacity 
              style={loginStyle.buttonOuter}
              onPress={() => navigation.navigate('LoginSiswaScreen')}
          >
              <Text style={loginStyle.ButtonSubmit}>Student</Text>
          </TouchableOpacity>

          <TouchableOpacity 
              style={loginStyle.buttonOuter}
              onPress={() => navigation.navigate('LoginGuruScreen')}
          >
              <Text style={loginStyle.ButtonSubmitWhite}>Teacher</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen