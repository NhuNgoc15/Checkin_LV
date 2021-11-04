import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from '../components/context/AuthContext'



export default function LoginScreen({navigation}) {
    const [username, setUsername] = useState('test1')
    const [password, setPassword] = useState('pass123456')
    const [token, setToken] = useState(null)
    
    const {logIn} = React.useContext(AuthContext);
    useEffect(() => {
        getData();
    }, []);

    const getData =async () => {
        try {
            AsyncStorage.getItem('token')
            .then(value => {
                // if (value != null) {
                    // navigation.navigate('Home')
                // }
                console.log(value);
            })
        } catch (error) {
            console.log(error);
        }
    }
    
    
    const handleLogin = async() => {
        await fetch('https://api-mcs-manager.herokuapp.com/api/auth/signin',{
            method:"POST",
            headers:{
                'Accept':"Application/json",
                'Content-Type':"Application/json"
            },
            body:JSON.stringify({
                'username':username,
                'password':password,
                'token':token,
            })
        })

        .then(response => response.json())
        .then(async response => {
            console.log("response: ",response);

            if(response.token){
                logIn(response.token);
            }
            if(response.message.role) {
                await AsyncStorage.setItem("role", response.message.role);
                
            }
            // console.log(response.message.role);

            //  navigation.navigate('App'); 
        })
        .catch(error => console.log(error))
        } 

    return (
    <View style={styles.container}>
        <View style={styles.scrollView}>
            <View style={styles.title}>
                <Text style={{fontSize:65,color:'#7879F1', fontWeight: 'bold',}}>MCS</Text>
                <Text style={{fontSize:45,color:'#7879F1'}}>Check in</Text>
            </View>
            <View style={styles.infoContainer}>
                <TextInput style={styles.input}
                    placeholder='Tên đăng nhập'
                    placeholderTextColor='#777777'
                    onChangeText={(value)=>setUsername(value)}
                    //autoCapitalize='none'
                    value={username}
                    autoCorrect={false}
                />
                <TextInput style={styles.input}
                    placeholder='Mật khẩu'
                    placeholderTextColor='#777777'
                    onChangeText={(value)=>setPassword(value)}
                    //value={values.password}
                    value={password}
                    autoCorrect={false}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.loginBtn} onPress={handleLogin} >
                    <Text style={styles.buttonText}>Đăng nhập</Text>
                </TouchableOpacity>
                {/* <Text>{this.state.username} | {this.state.password}</Text> */}
            </View>
        </View >
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //flexDirection: "column"
    },

    scrollView: {
        //flex: 1,
    },

    title: {
        //justifyContent: 'center',
        alignItems: 'center',
        // top: 20,
    },
    infoContainer: {
        //position: 'absolute',
        left: 0,
        right: 0,
        //bottom: 50,
        //height: 210,
        paddingHorizontal: 30,
        top: 90,
        
    },
    input: {
        height: 45,
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
        marginTop: 15,
    },
    buttonText: {
        textAlign: 'center',
        paddingVertical: 9,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})

