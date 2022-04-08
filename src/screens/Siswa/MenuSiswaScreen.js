import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Modal, Pressable, Image, Button} from 'react-native';
// import { AuthContext } from '../../db/AuthProvider';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

import menuStyle from '../../components/Styles/menuStyle';


function MenuSiswaScreen({ route , navigation}) {
  // const {user, logout} = useContext(AuthContext)
  // const user = auth.currentUser;

  const data = route.params;

  const [userData, setUserData] = useState([]);

  let logout = async () => {
    try {
      await auth().signOut();
      navigation.navigate('Login');
    } catch (e) {
      console.log(e);
    }
  }

  let fetchData = async () => {
    try {
      await firestore()
      .collection('users')
      // Filter results
      .where('email', '==', data.email)
      .get()
      .then(querySnapshot => {
        // console.log(data.email)
        setUserData(querySnapshot.docs[0].data());
        // console.log(userData)
      });
    }catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
}, [])
  
  return (
    <View style={menuStyle.container}>
      <View style={menuStyle.blueBox}>
        <View style={menuStyle.header}>
          <Text style={menuStyle.sekolahText}>SMA Darma Bangsa</Text>
          <View style={menuStyle.iconBar}>
            <Ionicons name="ios-notifications-sharp" size={30} color="white" />
            <Ionicons name="ios-settings-sharp" size={30} color="white" />
          </View>
        </View>
        <View style={menuStyle.box}>
          <View style={menuStyle.profile}>
            <View style={menuStyle.profileDetail}>
              <View style= {menuStyle.profilePhotoFrame}>
                <Image source={require('../../images/profile-example.png')} style={menuStyle.photoRounded}></Image>
              </View>
              <View style={menuStyle.profileText}>
                <Text style={menuStyle.textNama}>{userData.nama}</Text>
                <Text style={menuStyle.text}>{userData.kelas}</Text>
                <Text style={menuStyle.text}>NISN : {userData.no_induk}</Text>
              </View>
            </View>   
            <Pressable
            onPress={() => logout()}
            >
              <SimpleLineIcons 
                name="logout"     
                size={20} 
                color="black" 
                style={menuStyle.logout}
              />
            </Pressable>
          </View>
          <View style={menuStyle.dispensasiArea}>
            <Text style={menuStyle.dispensasiText}>Dispensasi Hari Ini</Text>
            <View style={menuStyle.dispensasiTextArea}>
              <Octicons name="dot-fill" size={20} color="red" />
              <Text style={menuStyle.text}>Tidak Dispensasi</Text>
            </View>
            
          </View>          
        </View>
      </View>
      <View style={menuStyle.bottomBox}> 
        <View style={menuStyle.infoEvent}>
          
        </View>
        <View style={menuStyle.informasi}>

        </View>
      </View>
    </View>
  )
}

export default MenuSiswaScreen