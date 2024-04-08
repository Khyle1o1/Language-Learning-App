import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LearnScreen from './../Screens/LearnScreen'
import ChatScreen from './../Screens/ChatScreen'
import KnowledgebaseScreen from './../Screens/KnowledgebaseScreen'
import ProfileScreen from './../Screens/ProfileScreen'



const Tab = createBottomTabNavigator();
export default function TabNavigations() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Learn" component={LearnScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Knowledge Base" component={KnowledgebaseScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}