import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RecentCalls from './screen/RecentCalls'
import Setting from './screen/Setting'
import RecentChats from './screen/RecentChats'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Fullsnack from './screen/GroupChat'
import FullsnackDetails from './screen/ProfileDetails'
import AllChats from './screen/AllChats'
import InactiveCall from '../assets/svgicons/inactive-tab-call.svg'
import ActiveCall from '../assets/svgicons/active-tab-call.svg'

const BottomTab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60
        },
        tabBarIconStyle: {

        }
      }}>
        <BottomTab.Screen name='Home' component={Home} options={{
          tabBarIcon: ({ focused }) => (
            <Ionicon name="chatbubble" size={24} color={!focused ? "lightgrey" : "#2F80ED"}/>
          ),

        }} />
        <BottomTab.Screen name='RecentChats' component={RecentChats} options={{
          tabBarIcon: ({ focused }) => (
            <Ionicon name='time' size={24} color={!focused ? "lightgrey" : "#2F80ED"}/>
          )
        }} />
        <BottomTab.Screen name='RecentCalls' component={RecentCalls} options={{
          tabBarInactiveTintColor: 'lightgrey',
          tabBarActiveTintColor: '#2F80ED',
          tabBarIcon: ({ focused }) => (
            !focused ? <InactiveCall height={24} width={24} /> : <ActiveCall height={24} width={24} />
          )
        }} />
        <BottomTab.Screen name='Settings' component={Setting} options={{
          tabBarIcon: ({ focused }) => (
            <Ionicon name='person-circle' size={24} color={!focused ? "lightgrey" : "#2F80ED"}/>
          )
        }} />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}
const Home = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='MainChats' component={AllChats} />
      <Stack.Screen name='Fullsnack' component={Fullsnack} />
      <Stack.Screen name='FullsnackDetails' component={FullsnackDetails} />
    </Stack.Navigator>
  )
}

export default Navigator