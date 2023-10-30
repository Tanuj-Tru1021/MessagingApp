import React from 'react'
import { View, Text, FlatList } from 'react-native'
import {texts} from '../Objects'

const BottomSheet2 = () => {
    return (
        <View>
            <Text
                style={{
                    paddingHorizontal: 16, paddingVertical: 12,
                    fontSize: 14, fontWeight: 500, color: '#1B1A57'
                }}>
                Channels
            </Text>
            <FlatList
                data={texts}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                backgroundColor: item.id !== "1" ? 'white' : '#E1E9FD'
                            }}>
                            <Text
                                style={{
                                    paddingHorizontal: 16, paddingVertical: 16,
                                    fontSize: 12, fontWeight: 500, color: item.id !== "1" ? '#4F5E7B' : '#2F80ED'
                                }}>
                                {item.text}
                            </Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default BottomSheet2