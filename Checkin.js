import React, { useState, useEffect } from 'react'
// import { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Checkin() {

    useEffect(async () => {
        // getData();
        const result = await AsyncStorage.getItem('name');
        // console.log("result", result);
        // console.log('name', name);
    }, []);
        
    return (
        
        <View>
                   
            <Text style={{color:'black',fontSize:25}}>{(this.props.route.params.item)}</Text>
            
            <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                navigation.navigate('Setting')
            }} >
            <Text style={styles.buttonText}>Điểm danh</Text>
            </TouchableOpacity>
            
        </View>
    )
}


const styles = StyleSheet.create({
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
