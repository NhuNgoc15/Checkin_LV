import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Event from '../screens/Event';
import EventDetail from '../screens/EventDetail';
import QRcard from '../screens/QRcard';


const Stack = createNativeStackNavigator();
const EventNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Event" component={Event} />
            <Stack.Screen name="EventDetail" component={EventDetail} />
            <Stack.Screen name="QRcard" component={QRcard} />
        </Stack.Navigator>
    )
}

export default EventNavigation


