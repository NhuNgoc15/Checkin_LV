import React from "react";
import Home from "../screens/Home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import ScanQR from "../screens/ScanQR";
import ScanQRNav from "./scanQR.nav";
import ChangePass from "../screens/ChangePass";
import eventNav from "./event.nav";





const Stack = createNativeStackNavigator();
export default Index = () => {
    return (
      //headerMode="none"
      <Stack.Navigator screenOptions={{headerShown:false}} > 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ScanQRNav" component={ScanQRNav} />
        {/* <Stack.Screen name="ScanQRNav" component={qrCodeScreen} /> */}
        {/* <Stack.Screen name="CheckIn" component={checkInScreen} /> */}
        <Stack.Screen name="EventNav" component={eventNav} />
        <Stack.Screen name="ChangePass" component={ChangePass} />

        
        
      </Stack.Navigator>
    );
  };