import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import QRCodeScanner from 'react-native-qrcode-scanner'

const qrCodeScreen = ({ navigation }) => {

    // const [token, setToken] = useState("");
    // const [code, setCode] = useState("");
    const [keyQRcode, setkeyQRcode] = useState("");
    const [event, setEvent] = useState(null);

    const onRead = e => {
        // console.log(e);
        // setCode(e.data)
        handleGetEvent(e.data);
        setkeyQRcode(e.data);
    }


    const handleGetEvent = async (keyQrCode) => {

        // const keyQrCode =await code;
        // console.log("qr code get keycode", keyQrCode);
        let getToken = await AsyncStorage.getItem("userToken");
        const userGetToken = JSON.parse(getToken);
        console.log("qr code get token", getToken);

        await fetch('https://api-mcs-manager.herokuapp.com/api/event/decode', {
            method: "POST",
            headers: {
                'Accept': "application/json",
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userGetToken}`,
            },
            body: JSON.stringify({
                'code': keyQrCode,
            })
            
        })
            .then((response) => response.json())
            .then(response => {
                console.log("response: ", response);
                setEvent(response.event);
                // alert("Done")
                //navigation.navigate('CheckIn', { data: response })
            })
            //console.log(keyQrCode);
    }

    return (
        <View  >
            <View>
                <QRCodeScanner
                    onRead={onRead}
                    // getInfo={handleGetEvent}
                    containerStyle={{ height: 600 }}
                    cameraStyle={[{ height: 400 }]}
                    cameraProps={{ captureAudio: false }}

                />
            </View>
            {event && <View >
                <Text style={{ color: 'black', top: 501, fontSize: 25 }} getInfo={handleGetEvent}>
                    {event.name}
                </Text>
            </View>}
            {/* <Text>screen</Text> */}
            {/* <TouchableOpacity style={styles.buttonContainer} onPress={handleGetEvent}> */}
            {/* <Text style={styles.buttonText}>Chi tiết</Text> */}
            {/* </TouchableOpacity> */}
            <Button style={styles.buttonText} title="Chi tiết" onPress={() => {
                navigation.navigate('CheckIn', { data: event, key: keyQRcode })
            }} />

        </View>
    )
}

export default qrCodeScreen

const styles = StyleSheet.create({
    // scanner: {
    // flex:1
    // },
    buttonContainer: {
        backgroundColor: '#7879F1',
        height: 47,
        width: 310,
        left: 45,
        top: 400,
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
