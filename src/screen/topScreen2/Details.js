import React from 'react'
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import Members from '../../components/Members'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { bookmarkstext, data3 } from '../../Objects'
import Add from '../../../assets/svgicons/add-people.svg'

const Details = () => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                flex: 1, backgroundColor: '#F4F4F4'
            }}>
            <View style={{backgroundColor:'F7F7F7', marginHorizontal: 16, borderRadius: 8}}>
                <FlatList
                    data={bookmarkstext}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{
                                    marginHorizontal: 32,
                                    marginVertical: 24,
                                    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
                                }}>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: 400, color: '#4F5E7B',
                                        maxWidth: 250
                                    }}>
                                    {item.text}
                                </Text>
                                <Ionicon
                                    name='chevron-forward'
                                    size={24}
                                    color={'#4F5E7B'}
                                />
                            </View>
                        )
                    }}
                    nestedScrollEnabled
                />
            </View>
            <TouchableOpacity
                style={{
                    marginHorizontal: 30, backgroundColor: '#F7F7F7',
                    borderRadius: 8, justifyContent: 'center',
                    alignItems: 'center', height: 40, marginTop: 24
                }}>
                <Text
                    style={{ fontSize: 12, fontWeight: 500, color: '#2D9CDB' }}
                >
                    See more
                </Text>
            </TouchableOpacity>
            <View
                style={{
                    marginHorizontal: 16, marginTop: 20,
                    marginBottom: 24, borderRadius: 8, paddingVertical: 12,
                    paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white'
                }}>
                <View style={{ flexDirection: 'row', }}>
                    <Ionicon
                        name='chatbox'
                        size={24}
                        color={'#2F80ED'}
                    />
                    <Text
                        style={{
                            paddingLeft: 16, top: 3,
                            fontSize: 12, fontWeight: 400, color: '#1B1A57'
                        }}>
                        4 Channels
                    </Text>
                </View>
                <Ionicon name='chevron-down-outline' size={16} color={'#4F5E7B'} />
            </View>
            <View
                style={{
                    marginHorizontal: 16, paddingTop: 12, backgroundColor: 'white', borderRadius: 8
                }}>
                <View
                    style={{
                        flexDirection: 'row', justifyContent: 'space-between'
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicon
                            name='people'
                            size={24}
                            color={'#2F80ED'}
                            style={{ paddingLeft: 16 }}
                        />
                        <Text
                            style={{
                                fontSize: 12, fontWeight: 400,
                                color: '#1B1A57', paddingLeft: 16,
                                paddingTop: 3, paddingBottom: 20
                            }}>
                            12 peoples
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginRight: 16 }}>
                        <Add height={24} width={24} style={{ marginRight: 24 }} />
                        <Ionicon
                            name='search-outline'
                            size={24}
                            color={'#2F80ED'}
                        />
                    </View>
                </View>
                <View style={{ height: 2, backgroundColor: '#F7F7F7', marginHorizontal: 8 }} />
                <FlatList
                    data={data3}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: 16, paddingBottom: 10 }}
                    renderItem={({ item }) => {
                        return (
                            <Members
                                text={item.name}
                                detail={item.admin}
                                image={item.image}
                            />
                        )
                    }}
                    nestedScrollEnabled
                />
            </View>
        </ScrollView>
    )
}

export default Details