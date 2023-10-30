import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Away from '../../assets/svgicons/away.svg'
import { suggestions, includedChats } from '../Objects'


const BottomSheet = () => {
    return (
        <View style={{
            flex: 1, paddingHorizontal: 16,
            backgroundColor: 'white', borderRadius: 16
        }}>
            <Text
                style={{
                    fontSize: 18, fontWeight: 500,
                    color: '#1B1A57', marginTop: 36
                }}>
                Create a new category
            </Text>
            <View
                style={{
                    flexDirection: 'row', paddingTop: 15,
                    justifyContent: 'space-between'
                }}>
                <TextInput
                    placeholder='Workmates'
                    placeholderTextColor={"#1B1A57"}
                    style={{
                        marginRight: 17, width: '80%',
                        borderBottomWidth: 2, borderBottomColor: '#2F80ED'
                    }} />
                <TouchableOpacity
                    style={{
                        backgroundColor: '#2F80ED',
                        borderRadius: 4, justifyContent: 'center',
                        alignItems: 'center', height: 30, top: 18
                    }}>
                    <Text
                        style={{
                            fontSize: 14, fontWeight: 500,
                            color: "#fff", paddingHorizontal: 10
                        }}>
                        Create
                    </Text>
                </TouchableOpacity>
            </View>
            <Text
                style={{
                    fontSize: 12, fontWeight: 700,
                    color: 'grey', marginTop: 24
                }}>
                Suggested :
            </Text>
            <View
                style={{ flexDirection: 'row', marginTop: 16 }}
            >
                {
                    suggestions.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={{
                                    backgroundColor: '#2F80ED', borderRadius: 4,
                                    justifyContent: 'center', alignItems: 'center', marginRight: 16
                                }}>
                                <Text
                                    style={{
                                        fontSize: 14, fontWeight: 500,
                                        color: "#fff", paddingHorizontal: 16,
                                        paddingVertical: 4
                                    }}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <View
                style={{
                    marginTop: 36, justifyContent: 'space-between',
                    flexDirection: 'row'
                }}>
                <Text
                    style={{
                        fontSize: 12, fontWeight: 700, color: 'grey'
                    }}>
                    Included chats (3)
                </Text>
                <Text
                    style={{
                        fontSize: 12, fontWeight: 700, color: '#2F80ED'
                    }}>
                    + Add chats
                </Text>
            </View>
            <View style={{ marginTop: 16 }}>
                {
                    includedChats.map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    flexDirection: 'row'
                                }}>
                                <View
                                    style={{
                                        position: 'relative'
                                    }}>
                                    <Image
                                        source={item.source}
                                        style={{ marginVertical: 12, marginRight: 16 }}
                                    />
                                    <Away
                                        height={12}
                                        width={12}
                                        style={{
                                            position: 'absolute', bottom: 12, right: 16
                                        }} />
                                </View>
                                <Text
                                    style={{
                                        fontSize: 14, fontWeight: 400,
                                        color: '#1B1A57', marginVertical: 23
                                    }}>
                                    {item.name}
                                </Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default BottomSheet