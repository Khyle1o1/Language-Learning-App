import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { client } from '../Utils/KindConfig';
import { AuthContext } from '../../App';
import Header from '../Components/Header';
export default function LearnScreen() {
    const {auth,setAuth}=useContext(AuthContext)    
    const handleLogout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {
      setAuth(false);
      console.log("LogOut Successfully")
        // User was logged out
    }
};
  return (
    <View style = {{padding:20, marginTop:25}}>
      <Header/>
      {/* <Text>LearnScreen</Text>
      <Button title='Logout'onPress={handleLogout}>LogOut</Button> */}
    </View>
  )
}