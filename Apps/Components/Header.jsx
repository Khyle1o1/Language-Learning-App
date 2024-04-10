import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { client } from '../Utils/KindConfig'
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {

    const [userDetail,setUserDetail] = useState();
    useEffect(()=>{
        getUserDetails();
    },[])
    const getUserDetails=async()=>{
        const user=await client.getUserDetails();
        setUserDetail(user)
    }
   
  return (
    <>
    <View style={{display:'flex',flexDirection:'row',gap:5, alignItems:'center'}}>
        <Image source={{uri:userDetail?.picture}}
            style={{width:45,height:45, borderRadius:99}}></Image>
        <View >
            <Text style={{fontSize:18, fontWeight:'bold'}}>Hi, {userDetail?.given_name}</Text>
            <Text style={{fontSize:20, fontWeight:'bold', color:Colors.DARKPLUM}}>Maayad ha Adlaw</Text>
        </View>
    </View>
    <View style={styles.input}>
    <Ionicons name="search" size={24} color={Colors.DISABLED} />
        <TextInput placeholder='Search'/>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:Colors.WHITE,
        padding:10,
        borderRadius:99,
        paddingHorizontal:20,
        marginTop: 15,
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
        borderWidth: 1,
        borderColor: Colors.DARKPLUM,
    }

})