import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Event = ({ navigation }) => {

    const [token, setToken] = useState("");
    const [data, setData] = useState([]);


    const getEvent = async () => {
        
        let getToken = await AsyncStorage.getItem("userToken");
        const userGetToken = JSON.parse(getToken);
        
        console.log("qr code get token", getToken);
        await fetch("https://api-mcs-manager.herokuapp.com/api/manager/event", {
            method: "GET",
            headers: {
                'Accept': "application/json",
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${userGetToken}`,
            },
        })
            .then((response) => response.json())
            .then(response => {
                console.log("response: ", response);
                setData(response.event)

            })
    }

    useEffect(() => {
        getEvent();
    }, [])


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Text>screen </Text>
            <FlatList
                data={data}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate('EventDetail', { data: item }) }}>
                            <View>
                                <Text>{item.name}</Text>
                                {/* <Text>{item.location}</Text> */}
                                {/* <Text>{item.dateEvent}</Text> */}
                            </View>
                        </TouchableOpacity>
                    )
                }}

            />
        </View>
    )
}

export default Event

const styles = StyleSheet.create({})
