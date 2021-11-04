import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from './screens/Splash';
import Signup1 from './screens/Signup1';
import TabNav from './navigator/tab.nav';
import ModalNav from "./navigator/modal.nav";
import Login from './screens/Login';
import Home from './screens/Home';





const Stack = createNativeStackNavigator();
//const Tab = createBottomTabNavigator();

// const Auth = () => {
  // return(
    // <Stack.Navigator initialRouteName="Splash" >
      {/* <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}} /> */}
      {/* <Stack.Screen name='Login' component={Login} /> */}
      {/* <Stack.Screen name='Signup' component={Signup1} /> */}
    {/* </Stack.Navigator> */}
  // )
// }

const checkLogin = async () => {
  const resp = await AsyncStorage.getItem('token');
  if (resp) {
    return true;
  }
  return false;
}



export default App = () => {

  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState(false);

  useEffect(() => {
    setToken(checkLogin);
  }, [])

// function Home() {
  // return(
    // <Tab.Navigator>
      {/* <Tab.Screen name='Home' component={Home} /> */}
      {/* <Tab.Screen name='Account' component={account} /> */}
    {/* </Tab.Navigator>     */}
  // );
//}
//const App = () =>{

  return (
    <NavigationContainer>
      <Stack.Navigator name='Login' component={Login} options={{headerShown: false}}>
      { token ? (
          <Stack.Group>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}} />
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
            <Stack.Screen name='Signup' component={Signup1} options={{headerShown: false}} />
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>            
            {/* <Stack.Screen name='Tab' component={TabNav} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name='Modal' component={ModalNav} /> */}
          </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Signup' component={Signup1} />
        </Stack.Group>
      )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};



// const styles = StyleSheet.create({})
