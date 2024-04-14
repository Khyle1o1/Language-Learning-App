import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Utils/Colors'
import SectionHeading from './SectionHeading';

export default function CategoryList({categories}) {

    const [activeIndex, setActiveIndex] = useState();
  return (
    <View style={{marginTop:20}}>
      <SectionHeading heading={''}/>
      <FlatList
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
              <TouchableOpacity style={[styles.container,activeIndex==index&&{borderWidth:1,borderColor:Colors.DARKPLUM}]}
            onPress={()=>{setActiveIndex(index)}}>
                <Image source={{uri:item?.icons?.url}}
                    style={{width:60,height:60,borderRadius:99,
                    objectFit:'contain'}}
                />
                <Text style={{textAlign:'center',marginTop:10}}>{item?.name}</Text>
            </TouchableOpacity>
            
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.DISABLED,
        padding:25,
        marginRight:10,
       alignItems:'center',
       justifyContent: 'center',
       borderRadius: 15,
      width: 132

    }
})