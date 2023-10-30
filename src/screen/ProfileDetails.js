import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Bookmarks from './topScreen2/Bookmarks'
import Images from './topScreen2/Images'
import Videos from './topScreen2/Videos'
import Documents from './topScreen2/Documents'
import Ionicon from 'react-native-vector-icons/Ionicons'
import HeadingDetails from '../components/HeadingDetails'
import Details from './topScreen2/Details'

const TopTabs = createMaterialTopTabNavigator()

const FullsnackDetails = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} stickyHeaderHiddenOnScroll={true}>
            <HeadingDetails onPress={() => navigation.goBack()} />
            <Tabs />
            <Details />
        </ScrollView>
    )
}

const Tabs = () => {
    return (
        <TopTabs.Navigator screenOptions={{
            scrollEnabled:true,
            tabBarIconStyle: {
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            },
            tabBarStyle: {
                paddingLeft: 16, 
                backgroundColor: '#F7F7F7'
            },
            tabBarShowLabel: false,
        }}>
            <TopTabs.Screen name='Bookmarks' component={Bookmarks} options={{
                tabBarShowIcon: true,
                tabBarActiveTintColor: "#2F80ED",
                tabBarInactiveTintColor: "#4F5E7B",
                tabBarIcon: ({ focused }) => (
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicon name="star-outline" size={16} color={!focused ? "#4F5E7B" : "#2F80ED"} />
                        <Text style={{ fontSize: 12, color: !focused ? "#4F5E7B" : "#2F80ED", top: 1, marginLeft: 8 }}>Bookmarks</Text>
                    </View>
                ),
            }} />
            <TopTabs.Screen name='Images' component={Images} options={{
                tabBarShowIcon: true,
                tabBarActiveTintColor: "#2F80ED",
                tabBarInactiveTintColor: "#4F5E7B",
                tabBarIcon: ({ focused }) => (
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicon name="image-outline" size={16} color={!focused ? "#4F5E7B" : "#2F80ED"} />
                        <Text style={{ fontSize: 12, color: !focused ? "#4F5E7B" : "#2F80ED", top: 1, marginLeft: 8 }}>Images</Text>
                    </View>
                ),
            }} />
            <TopTabs.Screen name='Videos' component={Videos} options={{
                tabBarShowIcon: true,
                tabBarActiveTintColor: "#2F80ED",
                tabBarInactiveTintColor: "#4F5E7B",
                tabBarIcon: ({ focused }) => (
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicon name="videocam-outline" size={16} color={!focused ? "#4F5E7B" : "#2F80ED"} />
                        <Text style={{ fontSize: 12, color: !focused ? "#4F5E7B" : "#2F80ED", top: 1, marginLeft: 8 }}>Videos</Text>
                    </View>
                ),
            }} />
            <TopTabs.Screen name='Documents' component={Documents} options={{
                tabBarShowIcon: true,
                tabBarActiveTintColor: "#2F80ED",
                tabBarInactiveTintColor: "#4F5E7B",
                tabBarIcon: ({ focused }) => (
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicon name="document-text-outline" size={16} color={!focused ? "#4F5E7B" : "#2F80ED"} />
                        <Text style={{ fontSize: 12, color: !focused ? "#4F5E7B" : "#2F80ED", top: 1, marginLeft: 8 }}>Documents</Text>
                    </View>
                ),
            }} />
        </TopTabs.Navigator>
    )
}

export default FullsnackDetails