import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/Login";
import Signup1 from "../screens/Signup1";
import Splash from "../screens/Splash";
import homeNav from "./home.nav";

const Stack = createNativeStackNavigator();

export default Index = () => {

    return (
        <Stack.Navigator headerMode="none">        
            <Stack.Screen name="App" component={homeNav} options={{ headerShown: false }} />               
        </Stack.Navigator>
    )
}

/**
 *   StackApp
 *        App   
 *              TrangChu
 *              DanhSachSuKien
 *                      PhatBLE
 *                      phatQR
 *              DiemDanhQR
 *                      
 * 
 *              DiemDanhBLE
 *              SuKienDaDangKy
 *              ThongTInNguoiDung
 *        auth
 *          SPLASH
 *          DN
 *          DK
 */