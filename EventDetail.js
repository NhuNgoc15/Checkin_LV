import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const EventDetail = ({navigation, route }) => {

    const { data } = route.params;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{data.name}</Text>
            <Text>{data.location}</Text>
            <Text>{data.dateEvent}</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => { navigation.navigate('QRcard', { data: data._id }) }}>
                <Text style={styles.buttonText}>QR Code</Text>
            </TouchableOpacity>
        </View>

    )
}

export default EventDetail

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#7879F1',
        height: 47,
        width: 200,
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
})
