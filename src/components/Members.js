import React from 'react'
import { View, Text, Image } from 'react-native'
import Online from '../../assets/svgicons/online.svg'


const Members = ({ text, detail, image }) => {
    return (
        <View
            style={{
                flexDirection: 'row', justifyContent:'space-between', paddingHorizontal: 16, flex: 1, marginBottom: 24
            }}>
            <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>
                <View style={{ position: 'relative' }}>
                    <Image
                        source={image}
                    />
                    <Online
                        height={12}
                        width={12}
                        style={{
                            position: 'absolute', bottom: 0, right: 0
                        }} />
                </View>
                <Text
                    style={{
                        fontSize: 14, fontWeight: 500,
                        color: '#1B1A57', paddingLeft: 16
                    }}>
                    {text}
                </Text>
            </View>
            <View
                style={{
                    height: 24, backgroundColor: detail !== "Admin" ? "white" : "#2F80ED",
                    paddingVertical: 4, paddingHorizontal: 8,
                    borderRadius: 8
                }}>
                <Text
                    style={{
                        fontSize: 12, fontWeight: 500,
                        color: detail !== "Admin" ? "#4F5E7B" : "white"
                    }}>
                    {detail}
                </Text>
            </View>
        </View>
    )
}

export default Members