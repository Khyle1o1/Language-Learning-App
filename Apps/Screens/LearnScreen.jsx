import { View, Text, Button } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { client } from '../Utils/KindConfig';
import { AuthContext } from '../../App';
import Header from '../Components/Header';
import GlobalApi from '../Utils/GlobalApi';
import CategoryList from './../Components/CategoryList';
export default function LearnScreen() {
    const {auth,setAuth}=useContext(AuthContext)  
    const [categories,setCategories]=useState();
    
    useEffect(()=>{
      getCategory();
    },[])
    const handleLogout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {
      setAuth(false);
      console.log("LogOut Successfully")
        // User was logged out
    }

    //get category list


}
const getCategory=()=>{
  GlobalApi.getCategory().then(resp=>{
    setCategories(resp.categories);
  })
}
  return (
    <View style = {{padding:20, marginTop:25}}>
      <Header/>
      {/* <Text>LearnScreen</Text>
      <Button title='Logout'onPress={handleLogout}>LogOut</Button> */}
      {/* <CategoryList> */}
      <CategoryList categories={categories}/>
    </View>
  )
}