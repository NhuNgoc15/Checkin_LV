import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import qrCodeScreen from '../screens/qrcode/qrCodeScreen';
import checkInScreen from '../screens/qrcode/checkInScreen';
import CheckinQR from '../screens/CheckinQR';

const Stack = createNativeStackNavigator();

const ScanQRNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ScanQR" component={qrCodeScreen} />
            <Stack.Screen name="CheckIn" component={checkInScreen} />
            <Stack.Screen name="CheckinQR" component={CheckinQR} />
        </Stack.Navigator>
    )
}

export default ScanQRNavigation
