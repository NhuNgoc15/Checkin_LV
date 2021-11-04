import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeAd from '../screens/admin/HomeAd';
import EventNavigation from '../navigators/EventNavigation';

const Stack = createNativeStackNavigator();

const AdminNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="HomeAd" component={HomeAd} />
            <Stack.Screen name="EventNav" component={EventNavigation} />
            {/* <Stack.Screen name="Event" component={Event} /> */}
            {/* <Stack.Screen name="EventDetail" component={EventDetail} /> */}
            {/* <Stack.Screen name="QRcard" component={QRcard} /> */}
        </Stack.Navigator>
    )
}

export default AdminNavigation





