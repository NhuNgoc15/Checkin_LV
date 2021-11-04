import React, { useEffect, useState,useMemo } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import ScanQRNavigation from './ScanQRNavigation';
import Setting from '../screens/Setting';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AdminNavigation from './AdminNavigation';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {

    const [roleUser, setRoleUser] = useState("");

    const getRole = async () => {
        const roleUser = await AsyncStorage.getItem("role");
        setRoleUser(roleUser);
        console.log("role user", roleUser)
    }
    useEffect(() => {
        getRole();
    }, [])


    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            {roleUser === "Visiter" ?
                <Stack.Group>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="ScanQRNav" component={ScanQRNavigation} />
                    <Stack.Screen name="Setting" component={Setting} />
                </Stack.Group>
            :
                <Stack.Group>
                    <Stack.Screen name="AdminNav" component={AdminNavigation} />
                </Stack.Group>
            } 
        </Stack.Navigator>
    )
}

export default AppNavigation
