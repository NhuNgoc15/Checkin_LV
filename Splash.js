import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native'





export default class Splash extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{fontSize:65,color:'#7879F1', fontWeight: 'bold',}}>MCS</Text>
                    <Text style={{fontSize:45,color:'#7879F1'}}>Check in</Text>
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => {this.props.navigation.navigate('Login')} } >
                    <Text style={styles.buttonText}>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => {this.props.navigation.navigate('Signup')} } >
                    <Text style={styles.buttonText}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
            
        )            
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: "column"
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 50,
    },
    buttonContainer: {
        backgroundColor: '#7879F1',
        height: 47,
        width: 310,
        left: 45,
        top: 200,
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
})












