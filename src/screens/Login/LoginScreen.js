import React from 'react'
import { View, Text, TextInput, TouchableOpacity,Image, ImageBackground } from 'react-native';

import loginStyle from '../../components/Styles/loginStyle';

function LoginScreen({navigation}) {
  return (
    <View style={loginStyle.container}>
      <Image source={require('../../images/Background.png')} resizeMode="cover" style={loginStyle.background}></Image>
      <View style={loginStyle.box2}> 
          <Text style={loginStyle.title}>Darma Bangsa App</Text>
          <Text style={loginStyle.header}>Smart, Dynamic, and Bright</Text>
          <View style={loginStyle.logo}>
            <Image source={require('../../images/logo.png')}/>
          </View>
      </View>

      <View style={loginStyle.box}>

          <Text style={loginStyle.login}>
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