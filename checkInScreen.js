import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage'

const checkInScreen = ({ route }) => {
    const { data, key } = route.params;

    console.log(key);
    const [deviceId, setDeviceId] = useState("");
    const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());
    console.log(currentDateTime);

    const getDeviceId = async () => {
        const Deviceinfo = await DeviceInfo.getUniqueId();
        console.log("IMEI ",Deviceinfo);
        setDeviceId(Deviceinfo);
    }



    useEffect(() => {
        getDeviceId();
    }, []);

    const onSubmit = async () => {
        let getToken = await AsyncStorage.getItem("userToken");
        const userGetToken = await JSON.parse(getToken);
        fetch("https://api-mcs-manager.herokuapp.com/api/user/checkin", {
            method: "POST",
            headers: {
                'Accept': "application/json",
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userGetToken}`,
            },
            body: JSON.stringify({
                'imei': deviceId,
                'timeCheckin': currentDateTime,
                'code': key,
            })
        })
            .then((response) => response.json())
            .then(response => {
                console.log("response: ", response);
                alert(response.message)
                //navigation.navigate('CheckIn', { data: response })
            })

    }

    return (
        <View>
            <Text>{data.name}</Text>
            <Text>{data.location}</Text>
            <Text>{data.dateEvent}</Text>
            {/* <Text>text</Text> */}
            {/* <TouchableOpacity */}
            {/* onPress={getDeviceId} */}
            {/* activeOpacity={0.5}> */}
            {/* <Text> */}
            {/* Device ID */}
            {/* </Text> */}
            {/* </TouchableOpacity> */}
            {/* <Text> */}
            {/* {deviceId} */}

            {/* </Text> */}

            <TouchableOpacity style={styles.loginBtn}
                onPress={onSubmit}
            >
                <Text style={styles.buttonText}>Điểm danh</Text>
            </TouchableOpacity>

        </View>
    )
}

export default checkInScreen

const styles = StyleSheet.create({
    loginBtn: {
        backgroundColor: '#7879F1',
        width: 350,
        borderRadius: 15,
        left: -5,
        //top: 20
    },
    buttonText: {
        textAlign: 'center',
        paddingVertical: 9,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})
