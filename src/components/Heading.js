import React from 'react'
import { View, Text } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'


const Heading = ({ title}) => {
  return (
    <View style={{ flexDirection:'row', paddingVertical: 15, justifyContent:'space-between', backgroundColor: '#F4F4F4' }}>
      <Text style={{
        color:'#1B1A57', fontSize: 18, fontWeight: 500
      }}>
        {title}
      </Text>
      <Ionicon
        name='search-outline'
        size={20}
        color={'black'}
       />
    </View>
  )
}

export default Heading