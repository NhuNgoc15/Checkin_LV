import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView, StatusBar  } from 'react-native'


export default function Signup1() {
    const [fullName, setFullName] = useState('')
    const [idCB, setIdCB] = useState('')
    const [idSV, setIdSV] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [workUnit, setWorkUnit] = useState('')
    const [address, setAddress] = useState('')
    const [addressUnit, setAddressUnit] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = () => {
        fetch('https://api-mcs-manager.herokuapp.com/api/auth/signup', {
            method: "POST",
            headers: {
                'Accept': "Application/json",
                'Content-Type': "Application/json"
            },
            body: JSON.stringify(
                {
                    'username': username,
                    'password': password,
                    'fullName': fullName, 
                    'idCB': idCB,
                    'idSV': idSV,
                    'phone': phone,
                    'email': email,
                    'workUnit': workUnit,
                    'address': address,
                    'addressUnit': addressUnit,

                }
            )
        })
            .then(response => response.json())
            .then(response => {
                if (response.message) {
                    alert(response.message);
                    console.log(response);
                }
                console.log(response);
                alert(response.message);
            })
            .catch(error => console.log(error))
        // try {
        // await AsyncStorage.setItem('token', username);
        //this.props.navigation.navigate('Login');
        // } catch (error) {

    }



    //console.log(username, password, fullname, idCB, idSV, phone, email, workUnit, address, addressUnit);



    return (
    <SafeAreaView  style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View style={styles.title}>
                <Text style={{ fontSize: 38, color: '#7879F1', fontWeight: 'bold', }}>MCS</Text>
                <Text style={{ fontSize: 18, color: '#7879F1' }}>Check in</Text>
            </View>
            <View style={styles.infoContainer}>
                <TextInput style={styles.input}
                    placeholder='Họ tên'
                    placeholderTextColor='#777777'
                    onChangeText={(value) => setFullName(value)}
                    value={fullName}
                    //autoCapitalize='none'
                    autoCorrect={false}
                />
                <TextInput style={styles.input}
                    placeholder='Mã cán bộ'
                    placeholderTextColor='#777777'
                    onChangeText={(value) => setIdCB(value)}
                    value={idCB}
                    autoCorrect={false}
                />
                <TextInput style={styles.input}
                    placeholder='Mã sinh viên'
                    placeholderTextColor='#777777'
                    onChangeText={(value) => setIdSV(value)}
                    value={idSV}
                    autoCorrect={false}
                />
                <TextInput style={styles.input}
                    placeholder='Số điện thoại'
                    placeholderTextColor='#777777'
                    onChangeText={(value) => setPhone(value)}
                    value={phone}
                    autoCorrect={false}
                />
                <TextInput style={styles.input}
                    placeholder='Email'
                    placeholderTextColor='#777777'
                    onChangeText={(value) => setEmail(value)}
                    value={email}
                    autoCorrect={false}
                />
                <TextInput style={styles.input}
                    placeholder='Địa chỉ'
                    placeholderTextColor='#777777'
                    onChangeText={(value) => setAddress(value)}
                    value={address}
                    autoCorrect={false}
                />
                <TextInput style={styles.input}
                    placeholder='Đơn vị'
                    placeholderTextColor='#777777'
                    onChangeText={(value) => setWorkUnit(value)}
                    value={workUnit}
                    autoCorrect={false}
                />
                <TextInput style={styles.input}
                    placeholder='Địa chỉ đơn vị'
                    placeholderTextColor='#777777'
                    onChangeText={(value) => setAddressUnit(value)}
                    value={addressUnit}
                    autoCorrect={false}
                />
                <TextInput style={styles.input}
                    placeholder='Tên đăng nhập'
                    placeholderTextColor='#777777'
                    onChangeText={(value) => setUsername(value)}
                    value={username}
                    autoCorrect={false}
                />
                <TextInput style={styles.input}
                    placeholder='Mật khẩu'
                    placeholderTextColor='#777777'
                    onChangeText={(value) => setPassword(value)}
                    value={password}
                    autoCorrect={false}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.loginBtn}
                    onPress={onSubmit}
                >
                    <Text style={styles.buttonText}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView >
    )
}


// export default Signup1
// 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // flexDirection: "column",
        //paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        
    },
    title: {
        //justifyContent: 'center',
        alignItems: 'center',
        //top: 20,
    },
    infoContainer: {
        top: 0,
        left: 0,
        right: 0,
        //bottom: 100,
        //height: 210,
        paddingHorizontal: 30,

    },
    input: {
        //height: 42,
        //width: 345,
        paddingLeft: 5,
        fontSize: 18,
        color: '#777777',
        marginBottom: 12,
        borderBottomColor: '#777777',
        borderBottomWidth: 1.25,
        paddingBottom: 1


    },
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

