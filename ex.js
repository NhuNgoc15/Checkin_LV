import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LoginScreen() {

        constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            token:'',
            message: ''
          };
        }
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{fontSize:65,color:'#7879F1', fontWeight: 'bold',}}>MCS</Text>
                    <Text style={{fontSize:45,color:'#7879F1'}}>Check in</Text>
                </View>
            <View style={styles.infoContainer}>
            <TextInput style={styles.input}
                placeholder='Tên đăng nhập'
                placeholderTextColor='#777777'
                onChangeText={(username)=>this.setState({username})}
                value={this.state.username}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <TextInput style={styles.input}
                placeholder='Mật khẩu'
                placeholderTextColor='#777777'
                onChangeText={(password)=>this.setState({password})}
                value={this.state.password}
                autoCorrect={false}
                secureTextEntry
            />
            <TouchableOpacity style={styles.loginBtn} onPress={this.handleLogin} >
                <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>
            {/* <Text>{this.state.username} | {this.state.password}</Text> */}
            </View>
            </View>
        )

        handleLogin = async() => {
            await fetch('https://api-mcs-manager.herokuapp.com/api/auth/signin',{
                method:"POST",
                headers:{
                    'Accept':"Application/json",
                    'Content-Type':"Application/json"
                },
                body:JSON.stringify({
                    username:this.state.username,
                    password:this.state.password,
                })
            })
            .then(response => response.json())
            // .then(response => {
                // if(response.message){
                    // alert(response.message);
                // }
                // console.log(response);
            // })
            .catch(error => console.log(error))
            try {
                await AsyncStorage.setItem('token', username);
                this.props.navigation.navigate('Home');
            } catch (error) {
                
            }
            this.props.navigation.navigate('Home');
        }
    }

    

    // _login = async() => {
        // if(userInfo.username === this.state.username && userInfo.password === this.state.password) {
           // alert('Logged In');
            // await AsyncStorage.setItem('isLoggedIn', '1');
            // this.props.navigation.navigate('ScanQR') 
        // }
        // else {
            // alert('Username or Password is incorrect')
        // }
    //}





export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: "column"
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 30,
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 100,
        height: 210,
        paddingHorizontal: 30,
        
    },
    input: {
        height: 42,
        width: 345,
        paddingLeft: 5, 
        fontSize: 20, 
        color: '#777777',
        marginBottom: 20,
        borderBottomColor: '#777777',
        borderBottomWidth: 1.25,


    },
    loginBtn: {
        backgroundColor: '#7879F1',
        width: 350,
        borderRadius: 15,
        left: -4,
        marginTop: 25,
    },
    buttonText: {
        textAlign: 'center',
        paddingVertical: 9,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})
