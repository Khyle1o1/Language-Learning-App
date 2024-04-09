import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { client } from '../Utils/KindConfig';
import { AuthContext } from '../../App';

export default function Splash() {
    const {auth,setAuth}=useContext(AuthContext);

    const handleSignUp = async () => {
      const token = await client.register();
      if (token) {
        console.log("SingUp Authenticated Successfuly")
        setAuth(true)
        // User was authenticated
      }
    };
    
    const handleSignIn = async () => {
      const token = await client.login();
      if (token) {
        console.log("SignInAuthenticated Successfully")
        setAuth(true)
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
        // fontFamily: 'Noto Sans',
        fontStyle: 'italic',
        fontSize: 15,
        fontWeight: 'medium',
        marginTop: 10,

    }
    
})