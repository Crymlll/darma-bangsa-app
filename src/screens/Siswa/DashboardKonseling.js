import React from 'react'
import { View, Text, Button, StyleSheet, Modal, Pressable, Image} from 'react-native';


function DashboardKonseling({ route , navigation}) {
    const data = route.params;

    let fetchdata = () => {
        console.log(data.userData)
    }

  return (
    <View>
        <Text>Haloo {data.userData.nama} </Text>
        {fetchdata()}
        <Button
            title="goback"
            onPress={() => navigation.goBack()}
        >
            
        </Button>
    </View>
  )
}

export default DashboardKonseling