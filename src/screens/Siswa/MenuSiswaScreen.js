import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Modal, Pressable, Image, Button} from 'react-native';
// import { AuthContext } from '../../db/AuthProvider';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


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
    <View>
        <Text>Haloo {userData.nama} </Text>
        <Button
            title="Logout"
            onPress={() => logout()}
        >
          <Text>SignOUT</Text>
        </Button>

        <Button
            title="konseling"
            onPress={() => navigation.navigate('DashboardKonseling', {userData})}
        >

        </Button>
    </View>
  )
}

export default MenuSiswaScreen