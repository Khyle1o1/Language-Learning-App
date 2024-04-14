import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function SectionHeading({heading}) {
  return (
    <Text style={{fontSize:20,marginBottom:5,fontWeight:'bold',
    color:Colors.DARKPLUM}}>{heading}Category</Text>
  )
}