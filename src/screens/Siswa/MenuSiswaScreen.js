import React from 'react'
import { View, Text, StyleSheet, Modal, Pressable, Image, Button} from 'react-native';
// import { AuthContext } from '../../db/AuthProvider';

function MenuSiswaScreen() {
  // const {user, logout} = useContext(AuthContext)

  return (
    <View>
        <Text>Haloo </Text>
        <Button
            title="Logout"
            onPress={() => logout()}
        >
          <Text>SignOUT</Text>
        </Button>
    </View>
  )
}

export default MenuSiswaScreen