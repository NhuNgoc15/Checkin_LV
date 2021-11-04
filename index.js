import React, { useEffect, useReducer, useMemo } from "react";
//import { Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabNav from "./tab.nav";
//import ModalNav from "./modal.nav";
import AuthNav from "./auth.nav";

import { AuthContext } from '../components/context/AuthContext';
import LoginScreen from "../screens/Login";
import Splash from "../screens/Splash";
import Signup1 from "../screens/Signup1";
import { ActivityIndicator, View } from "react-native";

const Stack = createNativeStackNavigator();

// action
const RESTORE_TOKEN = "RESTORE_TOKEN";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// init state
const initState = {
  userToken: null,
  isLoading: true
}


// reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userToken: action.token,
        isLoading: false
      }
    case LOGOUT:
      return {
        ...state,
        userToken: null,
        isLoading: false
      }
    case RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.token,
        isLoading: false
      }

    default:
      break;
  }
}





export default AppNavContainer = () => {

  const [authState, dispatch] = useReducer(authReducer, initState);

  const authContext = useMemo(() => ({
    logIn: async (userToken) => {
     try {
      await AsyncStorage.setItem("userToken", JSON.stringify(userToken));
     } catch (error) {
       console.log(error);
     }
      dispatch({ type: LOGIN, token: userToken })
    },
    logOut: async () => {
      try {
        await AsyncStorage.removeItem("userToken")
      } catch (error) {
        console.log(error);
      }
      dispatch({ type: LOGOUT })
    }
  }), [])


  useEffect( () =>{
    const timeOut = setTimeout( async() =>{
      try {
        const getToken = await AsyncStorage.getItem("userToken");
        dispatch({ type:RESTORE_TOKEN, token: getToken })
      } catch (error) {
        console.log(error);
      }
    },1000)
    
    //cleanUp
    return () => clearTimeout(timeOut);
    
  },[])

  if(authState.isLoading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:"center"}} >
        <ActivityIndicator size="large"/>
      </View>
    )
  }


  return (
    <AuthContext.Provider value={authContext} >
      <NavigationContainer>
        <Stack.Navigator >
          {authState.userToken !== null ? 
          <Stack.Screen name="Auth" component={AuthNav} options={{ headerShown: false }} />
          :
          <Stack.Group>
            <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="SignUp" component={Signup1}/>
          </Stack.Group>
          }
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

//export default AppNavContainer