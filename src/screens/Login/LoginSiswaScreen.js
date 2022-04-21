import React, {useContext, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';

import {sloginStyle} from '../../components/Styles/loginStyle';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../../db/AuthProvider';

import {Formik} from 'formik';
import * as Yup from 'yup';

function LoginSiswaScreen({navigation}) {
  ///siswa
  // const email = 'aulia@gmail.com'
  // const password = 'auliarahmanz'

  const login = async (email, password) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={require('../../images/Background.png')}
        resizeMode="cover"
        style={sloginStyle.background}></Image>
      <View style={sloginStyle.box}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: '20%',
            color: 'black',
          }}>
          Sign in
        </Text>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={(values, actions) => {
            console.log('Trying login...');
            login(values.email, values.password);
            actions.setSubmitting(false);
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email!')
              .required('Email is required!'),
            password: Yup.string()
              .required('Password is required!')
              .min(8, 'Password is too short!'),
          })}>
          {formikProps => {
            const {handleChange, handleBlur, handleSubmit, values, errors} =
              formikProps;
            return (
              <View>
                <TextInput
                  style={sloginStyle.input}
                  placeholder="Email"
                  value={values.email}
                  underlineColorAndroid="transparent"
                  placeholderTextColor={'#c4c4c4'}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCompleteType="email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                {errors.email ? (
                  <Text style={sloginStyle.valid}>{errors.email}</Text>
                ) : (
                  <Text style={sloginStyle.valid}></Text>
                )}

                <TextInput
                  style={sloginStyle.input}
                  placeholder="Password"
                  value={values.password}
                  underlineColorAndroid="transparent"
                  placeholderTextColor={'#c4c4c4'}
                  autoCapitalize="none"
                  secureTextEntry
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                {errors.password ? (
                  <Text style={sloginStyle.valid}>{errors.password}</Text>
                ) : (
                  <Text style={sloginStyle.valid}></Text>
                )}

                <TouchableOpacity
                  mode="contained"
                  // disabled={!isValid || !dirty}
                  onPress={() => {
                    handleSubmit();
                  }}>
                  <Text style={sloginStyle.ButtonSubmit}>Submit</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </Formik>
      </View>
    </View>
  );
}

export default LoginSiswaScreen;
