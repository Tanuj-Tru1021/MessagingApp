import React from 'react'
import { Text, View } from 'react-native'

const RecentChats = () => {
  return (
    <View
      style={{
        flex: 1, justifyContent: 'center',
        backgroundColor: '#F6F6F6', alignItems: 'center'
      }}>
      <Text
        style={{
          fontSize: 30, color: 'black'
        }}>
        Recent Chats Page
      </Text>
    </View>
  )
}

export default RecentChats