import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

const ScanBLE = () => {
    return (
        <View style={styles.scanner}>
                <TouchableOpacity style={styles.buttonScanner}>
                    <Text style={styles.buttonText}>Broadcast</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonScanner}>
                    <Text style={styles.buttonText}>Scan</Text>
                </TouchableOpacity>
        </View>
    )
}

export default ScanBLE

const styles = StyleSheet.create({
    scanner: {
        top: 100,

    },
    buttonScanner: {
        width: 300,
        height: 45,
        left: 47,
        backgroundColor: '#436EEE',
        marginBottom: 20,
    },
    buttonText: {
        textAlign: 'center',
        paddingVertical: 9,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})
