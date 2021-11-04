import React, { useState, useEffect, useContext } from 'react'
import { Button, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import { AuthContext } from '../../components/context/AuthContext';


export default function HomeAd ({ navigation }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {logOut} = useContext(AuthContext);

    const [token, setToken] = useState(null)
    const getUserToken =async() => {
        const result = await AsyncStorage.getItem('userToken');
        console.log("result", result);
    }
    // useEffect( () => {
        //  getData();
        // 
    // }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        let user = JSON.parse(value);
                        setUsername(user.username);
                        setPassword(user.password)
                        setToken(user.token);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.title}>
                <Text style={styles.titleText}>Trang chủ</Text>
                {/* <Text>Xin chào {username}</Text> */}
            </View>
            <TouchableOpacity style={styles.buttonContainer} 
            onPress={() => {logOut()}}>
                <Text style={styles.buttonText}>Log out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                navigation.navigate('EventNav')
            }} >
                <Text style={styles.buttonText}>Danh sách sự kiện</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                navigation.navigate('Setting')
            }} >
                <Text style={styles.buttonText}>Hồ sơ</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // flexDirection: "column"
    },
    title: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 50,
        borderBottomColor: '#777777',
        borderBottomWidth: 1.25,
    },
    buttonContainer: {
        backgroundColor: '#7879F1',
        height: 47,
        width: 310,
        left: 45,
        top: 100,
        marginTop: 25,
        borderRadius: 15
    },
    buttonText: {
        textAlign: 'center',
        paddingVertical: 8,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        height: 47,
    },
    titleText: {
        fontSize: 20,
        marginLeft: 12,
        fontWeight: 'bold',
    }
})

