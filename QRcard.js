import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const QRcard = ({ route }) => {
    const [token, setToken] = useState("");
    const [qrcode, setQRcode] = useState("");
    const id = route.params.data;
    console.log(id)

    const getQRcode = async () => {

        let getToken = await AsyncStorage.getItem("userToken");
        const userGetToken = JSON.parse(getToken);

        await fetch(`https://api-mcs-manager.herokuapp.com/api/event/${id}/qrcode`, {
            method: "GET",
            headers: {
                'Accept': "application/json",
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userGetToken}`,
            },
        })
            .then((response) => response.json())
            .then(response => {
                console.log("response: ", response)

                if (response.message.qrcode) {
                    setQRcode(response.message.qrcode)
                }
            })

    }

    useEffect(() => {
        getQRcode();
    }, [])


    return (
        <View>
            {qrcode !== "" &&
                <Image
                    source={{ uri: qrcode }}
                    resizeMode='cover'
                    style={{ width: 200, height: 200 }}
                />
            }
        </View>
    )
}

export default QRcard

const styles = StyleSheet.create({})
