import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Bookmarks from './topScreen/Bookmarks'
import Images from './topScreen/Images'
import Videos from './topScreen/Videos'
import Documents from './topScreen/Documents'
import Ionicon from 'react-native-vector-icons/Ionicons'
import HeadingDetails from '../components/HeadingDetails'

const TopTabs = createMaterialTopTabNavigator()

const GroupChatDetails = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} >
            <HeadingDetails onPress={() => navigation.goBack()} />
            <Tabs />
        </ScrollView>
    )
}

export const Tabs = () => {
    const [activeTab, setActiveTab] = useState()
    return (
        <TopTabs.Navigator screenOptions={{
            swipeEnabled: false,
            tabBarShowIcon: true,
            tabBarScrollEnabled: true,
            tabBarItemStyle: {
                flexDirection: 'row', width: 'auto',
                shadowColor: '#00000050',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.3,
                shadowRadius: 2,
                elevation: 6,
                zIndex: 2,
            },
            tabBarIndicatorStyle: { backgroundColor: '#1ec2c9' },
            lazy: true,

        }}>
            <TopTabs.Screen name='Bookmarks'
             children={() => (
                <View style={{ display: activeTab == 0 ? 'flex' : 'none' }}>
                    <Bookmarks />
                </View>
            )}
            options={{
                tabBarPressOpacity: 0.8,
                tabBarIcon: ({ focused }) => {
                    return (
                        <Ionicon name="star-outline" size={16} color={!focused ? "#4F5E7B" : "#2F80ED"} style={{ paddingTop: 4 }} />
                    )
                },
                tabBarLabel: ({ focused }) => {
                    return (
                        <Text style={{
                            color: focused ? '#2F80ED' : '#4F5E7B',
                            fontWeight: (Platform.OS == 'ios' && focused) ? 'bold' : 'normal',
                            paddingRight: 10
                        }}>Bookmarks</Text>
                    )
                }
            }}
                listeners={{ focus: () => setActiveTab(0) }} />
            <TopTabs.Screen name='Images' children={() => (
                <View style={{ display: activeTab == 0 ? 'flex' : 'none', zIndex: 2 }}>
                    <Images />
                </View>
            )} options={{
                tabBarPressOpacity: 0.8,
                tabBarIcon: ({ focused }) => {
                    return (
                        <Ionicon name="image-outline" size={16} color={!focused ? "#4F5E7B" : "#2F80ED"} style={{ paddingTop: 4 }} />
                    )
                },
                tabBarLabel: ({ focused }) => {
                    return (
                        <Text style={{
                            color: focused ? '#2F80ED' : '#4F5E7B',
                            fontWeight: (Platform.OS == 'ios' && focused) ? 'bold' : 'normal',
                            paddingRight: 10
                        }}>Images</Text>
                    )
                }
            }}
                listeners={{ focus: () => setActiveTab(0) }} />
            <TopTabs.Screen name='Videos' children={() => (
                <View style={{ display: activeTab == 0 ? 'flex' : 'none' }}>
                    <Videos />
                </View>
            )} options={{
                tabBarPressOpacity: 0.8,
                tabBarIcon: ({ focused }) => {
                    return (
                        <Ionicon name="videocam-outline" size={16} color={!focused ? "#4F5E7B" : "#2F80ED"} style={{ paddingTop: 4 }} />
                    )
                },
                tabBarLabel: ({ focused }) => {
                    return (
                        <Text style={{
                            color: focused ? '#2F80ED' : '#4F5E7B',
                            fontWeight: (Platform.OS == 'ios' && focused) ? 'bold' : 'normal',
                            paddingRight: 10
                        }}>Videos</Text>
                    )
                }
            }}
                listeners={{ focus: () => setActiveTab(0) }} />
            <TopTabs.Screen name='Documents' children={() => (
                <View style={{ display: activeTab == 0 ? 'flex' : 'none' }}>
                    <Documents />
                </View>
            )} options={{
                tabBarPressOpacity: 0.8,
                tabBarIcon: ({ focused }) => {
                    return (
                        <Ionicon name="document-text-outline" size={16} color={!focused ? "#4F5E7B" : "#2F80ED"} style={{ paddingTop: 4 }} />
                    )
                },
                tabBarLabel: ({ focused }) => {
                    return (
                        <Text style={{
                            color: focused ? '#2F80ED' : '#4F5E7B',
                            fontWeight: (Platform.OS == 'ios' && focused) ? 'bold' : 'normal',
                            paddingRight: 10
                        }}>Documents</Text>
                    )
                }
            }}
                listeners={{ focus: () => setActiveTab(0) }} />
        </TopTabs.Navigator>
    )
}

export default GroupChatDetails