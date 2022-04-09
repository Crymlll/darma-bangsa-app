// In App.js in a new project

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";

import LoginRoutes from './src/routes/LoginRoutes';
import SiswaRoutes from './src/routes/SiswaRoutes';
import WaliKelasRoutes from './src/routes/WaliKelasRoutes';
import GuruBKRoutes from './src/routes/GuruBKRoutes';
import GuruKonselingRoutes from './src/routes/GuruKonselingRoutes';

import Firebase from '@react-native-firebase/app'

const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen name="Login" component={LoginRoutes}  />
//         <Stack.Screen name="Siswa" component={SiswaRoutes} />
//         <Stack.Screen name="WaliKelas" component={WaliKelasRoutes} />
//         <Stack.Screen name="GuruBK" component={GuruBKRoutes} />
//         <Stack.Screen name="GuruKonseling" component={GuruKonselingRoutes} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

class App extends Component {
  componentDidMount(){
    // Firebase.initializeApp(this);

    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },
    
      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
    
        // process the notification
    
        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
    
      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);
    
        // process the action
      },
    
      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function(err) {
        console.error(err.message, err);
      },
    
      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
    
      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,
    
      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });

  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginRoutes}  />
          <Stack.Screen name="Siswa" component={SiswaRoutes} />
          <Stack.Screen name="WaliKelas" component={WaliKelasRoutes} />
          <Stack.Screen name="GuruBK" component={GuruBKRoutes} />
          <Stack.Screen name="GuruKonseling" component={GuruKonselingRoutes} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}


export default App;