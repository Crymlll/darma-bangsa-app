import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

import {sloginStyle} from '../../components/Styles/loginStyle';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../../db/AuthProvider';

import {Formik} from 'formik';
import * as Yup from 'yup';

const ResetPassword = ({navigation}) => {
  let reset = email => {
    auth().sendPasswordResetEmail(email);
    alert('Reset password berhasil, silahkan cek email anda');
  };

  return (
    <View style={sloginStyle.container}>
      <TouchableOpacity
        style={sloginStyle.background}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../images/Background.png')}
          resizeMode="cover"
          style={sloginStyle.background}></Image>
      </TouchableOpacity>

      <View style={sloginStyle.headerBox}></View>
      <View style={sloginStyle.box}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: '20%',
            color: 'black',
          }}>
          Reset Password
        </Text>
        <ScrollView>
          <Formik
            initialValues={{email: ''}}
            onSubmit={(values, actions) => {
              console.log('Trying reset...');
              reset(values.email);
              actions.setSubmitting(false);
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email('Invalid email!')
                .required('Email is required!'),
            })}>
            {formikProps => {
              const {handleChange, handleBlur, handleSubmit, values, errors} =
                formikProps;
              return (
                <View>
                  <TextInput
                    style={sloginStyle.input}
                    placeholder="Your Email"
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
        </ScrollView>
      </View>
    </View>
  );
};

export default ResetPassword;
