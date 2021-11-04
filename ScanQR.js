import React from 'react'
import { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import AsyncStorage from '@react-native-async-storage/async-storage'

// const [data, setData] = useState('')

export default class ScanQR extends Component {
    state={
        // qr: "",
        code: "",
        name: "",
        // location: "",
        // dateEvent:"",
    }

    /*onRead - đọc mã */
    onRead = e => { 
        this.setState({code: e.data})
        //console.log('e.data')
        
    }

    getInfo() {
        const keyQrCode =  "U2FsdGVkX19QIMXiPk+1Ar1H7e/0ycTsojyI/cVTIF+o8ZfdYzZKsnwTqwEcMNzSMPo40Ges2ok9R1ceGADdOMZEbrsTH3E1";
         fetch('https://api-mcs-manager.herokuapp.com/api/event/decode', {
            method:"POST",
            headers:{
                'Accept':"Application/json",
                'Content-Type':"Application/json"
            },
            body:JSON.stringify({
                code:keyQrCode,
                // code: this.state.code,
            })
        })
        .then((response) => response.json())
        .then( response => {

            // var event = {
                // name: name,
                // location: location,
                // dateEvent: dateEvent,
                // code: code,
            //    }
            console.log("response: ",response);
            // await AsyncStorage.setItem('name', JSON.stringify(response.name));
            //alert(response.event);
             //navigation.navigate('Checkin'); 
        })
    }
    
    render(){
        // console.log(this.props.route.params)
        return (
            <View style={styles.scanner}>
                <View>
                    <QRCodeScanner 
                        onRead={this.onRead}
                        getInfo={this.getInfo}
                        containerStyle={{height:600}}
                        cameraStyle={[{height:400}]}
                        cameraProps={{captureAudio: false}}
                        
                    />
                </View>
                <View >
                    <Text style={{color:'black',top: 501, fontSize:25}} >
                        {this.state.qr}
                        
                    </Text>
                      
                </View>
                <TouchableOpacity style={styles.buttonContainer} 
                    onPress={() => {this.props.navigation.navigate('Checkin',{item:name})}}
                >
                <Text style={styles.buttonText}>Chi tiết</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scanner: {
        flex:1
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
