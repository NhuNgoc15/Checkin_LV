import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import DeviceInfo from 'react-native-device-info';

const Setting = () => {
    const [deviceId, setDeviceId] =
        useState('');

    const getdeviceId = () => {
        var uniqueId = DeviceInfo.getUniqueId();
        setDeviceId(uniqueId);
    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{deviceId}</Text>
            <TouchableOpacity
                onPress={getdeviceId}
                activeOpacity={0.5}>
                <Text>
                    UNIQUE ID OF DEVICE
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({})
