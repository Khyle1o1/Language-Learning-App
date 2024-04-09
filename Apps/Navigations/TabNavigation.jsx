import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LearnScreen from '../Screens/LearnScreen'
import ChatScreen from '../Screens/ChatScreen'
import KnowledgebaseScreen from '../Screens/KnowledgebaseScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import Colors from '../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.DARKPLUM,
      tabBarStyle: { height: 80 },
    }}
    >
        <Tab.Screen name="Learn" component={LearnScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="graduation-cap" size={24} color={color} />
            ),
            tabBarLabel:({color})=>(
              <Text style={{color}}>Learn</Text>
            )

          }}
        />
        <Tab.Screen name="Chat" component={ChatScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="wechat" size={24} color={color} />
            ),
            tabBarLabel:({color})=>(
              <Text style={{color}}>Chat</Text>
            )
          }}
        />
        <Tab.Screen name="Knowledge Base" component={KnowledgebaseScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="book" size={24} color={color} />
            ),
            tabBarLabel:({color, size})=>(
              <Text style={{color, fontSize: 10}}  >Knowledge Base</Text>
            )
          }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
            tabBarLabel:({color})=>(
              <Text style={{color}}>Profile</Text>
            )
          }}
        />
    </Tab.Navigator>
  )
}