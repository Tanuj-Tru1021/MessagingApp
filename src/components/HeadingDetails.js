import React, { useState } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import ToggleSwitch from 'toggle-switch-react-native'


const HeadingDetails = ({ onPress }) => {
    const [val, setVal] = useState(true)
    const toggle = () => {
        setVal(!val)
    }
    return (
        <View style={{ backgroundColor: 'white' }}>

            <Image
                source={require('../../assets/fruits.png')}
                style={{ width: '100%', marginBottom: 20 }}
            />
            <View
                style={{
                    flexDirection: 'row', marginHorizontal: 16, justifyContent: 'space-between'
                }}>
                <TouchableOpacity onPress={onPress} >
                    <Ionicon
                        name='arrow-back'
                        size={24}
                        color={'#4F5E7B'} />
                </TouchableOpacity>
                <Text
                    style={{
                        fontSize: 18, fontWeight: 500, color: '#1B1A57'
                    }}>
                    Fullsnack Designers
                </Text>
                <Ionicon
                    name='ellipsis-vertical'
                    size={24}
                    color={'#4F5E7B'}
                />
            </View>
            <View
                style={{
                    flexDirection: 'row', marginHorizontal: 32, marginTop: 49
                }}>
                <Ionicon
                    name='information-circle-outline'
                    size={30}
                    color={'#4F5E7B'}
                />
                <Text
                    style={{
                        fontSize: 14, fontWeight: 400,
                        color: '#4F5E7B', marginLeft: 16, marginRight: 44
                    }}>
                    We are fullsnack designers, yes. From food, for food, by food!
                </Text>
            </View>

            <View
                style={{
                    marginTop: 16, marginHorizontal: 32,
                    flexDirection: 'row', justifyContent: 'space-between'
                }}>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicon
                        name='notifications-outline'
                        size={24}
                        color={'#4F5E7B'}
                        style={{ paddingVertical: 16 }}
                    />
                    <Text
                        style={{
                            fontSize: 14, fontWeight: 400,
                            color: '#4F5E7B', paddingVertical: 20, paddingLeft: 16
                        }}>
                        Notifications
                    </Text>
                </View>
                <ToggleSwitch
                    isOn={val}
                    onColor='#2F80ED'
                    offColor='grey'
                    size='small'
                    onToggle={isOn => toggle()}
                />
            </View>
        </View>
    )
}

export default HeadingDetails