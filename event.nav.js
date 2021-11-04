import React from "react";
import Event from "../screens/Event";
import EventDetail from "../screens/EventDetail";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QRcard from "../screens/QRcard";

const Stack = createNativeStackNavigator();

export default Index = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Event" component={Event} />
      <Stack.Screen name="EventDetail" component={EventDetail} />
      <Stack.Screen name="QRcard" component={QRcard} />
      
      
    </Stack.Navigator>
  );
};
