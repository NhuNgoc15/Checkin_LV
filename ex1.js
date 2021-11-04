import React, { Component } from 'react'
import {Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'



export class Login extends Component {
    state ={
        username: "",
        password: "",
        token: ""
    }
    constructor(props) {
        super(props);
        this.getData();
    }
    handleLogin = async () => {
        await fetch('https://api-mcs-manager.herokuapp.com/api/auth/signin',{
            method:"POST",
            headers:{
                'Accept':"Application/json",
                'Content-Type':"Application/json"
        },
        body:JSON.stringify({
            'username':username,
            'password':password,
        })
    })
    .then(response => response.json())
    .then(response => {
    if(response.message){
    alert(response.message);
    }
    console.log(response);
    })
    .catch(error => console.log(error))
        try {
            this.setState({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWRhZTQwNzk2ZTAwYTY2NGJkNmE3YyIsImlhdCI6MTYzMzY4OTQ5OSwiZXhwIjoxNjM0Mjk0Mjk5fQ.3YdoXfQel_AlXcC9mDFWXwYyS2UnUrpnLE0jevoacxg'})
            await AsyncStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWRhZTQwNzk2ZTAwYTY2NGJkNmE3YyIsImlhdCI6MTYzMzY4OTQ5OSwiZXhwIjoxNjM0Mjk0Mjk5fQ.3YdoXfQel_AlXcC9mDFWXwYyS2UnUrpnLE0jevoacxg');
            await AsyncStorage.setItem('username', this.state.username)
            //await AsyncStorage.multiSet([['username', this.state.username], ['token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWRhZTQwNzk2ZTAwYTY2NGJkNmE3YyIsImlhdCI6MTYzMzY4OTQ5OSwiZXhwIjoxNjM0Mjk0Mjk5fQ.3YdoXfQel_AlXcC9mDFWXwYyS2UnUrpnLE0jevoacxg']])
            //await AsyncStorage.setItem('userprofile', JSON.stringify({username: this.state.username, token:this.state.token}))
        } catch (err) {
            console.log(err)
        }
    }
    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
            const username = await AsyncStorage.getItem('username')
            //const userprofile = await AsyncStorage.getItem('userprofile')
            //const userprofile = JSON.parse(userprofile)
            if(value !== null) {
                this.setState( {token: value})
            }
            if(username !== null) {
                this.setState({username})
            }
        }catch(e){

        }
    }    
        
    render() {
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
            onChangeText={value => this.setState( {username: value})}
            autoCapitalize='none'
            autoCorrect={false}
        />
        <TextInput style={styles.input}
            placeholder='Mật khẩu'
            placeholderTextColor='#777777'
            onChangeText={value => this.setState( {password: value})}
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
    }
}

export default Login
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


