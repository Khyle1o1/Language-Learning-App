import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { client } from '../Utils/KindConfig';

export default function Splash() {

    const handleSignUp = async () => {
      const token = await client.register();
      if (token) {
        // User was authenticated
      }
    };
    
    const handleSignIn = async () => {
      const token = await client.login();
      if (token) {
        console.log("Authenticated Successfully")
        // User was authenticated
      }
    };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleSignIn}>
            <Image source={require('./../../assets/images/Logo.png')}/>
            <Text style={styles.text}>A Binukid Language Learning Application</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#480355',
    },
    
    text : {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Noto Sans',
        fontStyle: 'italic',
        fontSize: 15,
        fontWeight: 'medium',
        marginTop: 10,

    }
    
})
