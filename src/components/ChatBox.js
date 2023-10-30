import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Away from '../../assets/svgicons/away.svg'
import Online from '../../assets/svgicons/online.svg'
import Offline from '../../assets/svgicons/offline.svg'
import InCall from '../../assets/svgicons/incoming-call.svg'
import OutCall from '../../assets/svgicons/outgoing-call.svg'
import Missed from '../../assets/svgicons/missed-call.svg'
import Tick from '../../assets/svgicons/double-tick.svg'

const ChatBox = ({ source, text, name, time, unread, nameStyle, textStyle, id, onPress, imageStyle, mainStyle, call, callType, active }) => {
    const flag = id === "11" || name === "Fullsnack Designers" ? false : true
    return (
        <TouchableOpacity
            style={{
                width: '100%',
                height: 64, flexDirection: 'row',
                borderRadius: 8, ...mainStyle,

            }}
            disabled={flag}
            onPress={onPress}
        >
            <View
                style={{
                    paddingVertical: 8, ...imageStyle, position: 'relative'
                }}>
                <Image source={source} />
                {
                    active === "A" ? <Away
                        height={12}
                        width={12}
                        style={{
                            position: 'absolute', bottom: 10, right: 0
                        }} /> :
                        active === "On" ? <Online
                            height={12}
                            width={12}
                            style={{
                                position: 'absolute', bottom: 10, right: 0
                            }} /> :
                            active === "Off" ? <Offline
                                height={12}
                                width={12}
                                style={{
                                    position: 'absolute', bottom: 10, right: 0
                                }} /> : ""
                }
            </View>
            <View
                style={{
                    paddingLeft: 16, flex: 1,
                    paddingRight: 8, justifyContent: 'center'
                }}>
                <View
                    style={{
                        justifyContent: 'space-between', flexDirection: 'row'
                    }}>
                    <Text style={{
                        fontSize: 14, fontWeight: 500,
                        color: '#1B1A57', ...nameStyle
                    }}>
                        {name}
                    </Text>
                    <Text
                        style={{
                            fontSize: 12, fontWeight: 400, color: '#333'
                        }}>
                        {time}
                    </Text>
                </View>

                <View
                    style={{
                        justifyContent: 'space-between', flexDirection: 'row'
                    }}>
                    <View
                        style={{
                            flexDirection: 'row', alignItems: 'center', paddingTop: 8
                        }}
                    >
                        {
                            call === "missed" ? <Missed height={15} width={15} /> :
                                call === "incoming" ? <InCall height={15} width={15} /> :
                                    call === "outgoing" ? <OutCall height={15} width={15} /> :
                                        call === "read" ? <Tick height={15} width={15} /> : ""
                        }
                        <Text
                            style={{
                                fontSize: 12, fontWeight: 400,
                                color: '#4F5E78', ...textStyle
                            }}>
                            {text}
                        </Text>
                    </View>
                    {
                        callType === "video" ? <Ionicon
                            name='videocam'
                            size={20}
                            color={'#2F80ED'}
                        /> : callType !== "0" ? <Ionicon
                            name='call'
                            size={20}
                            color={'#2F80ED'}
                        /> : ""
                    }
                    {
                        unread !== '0' ? <View
                            style={{
                                width: 24, height: 24,
                                borderRadius: 12, backgroundColor: '#2F80ED'
                            }}>
                            <Text
                                style={{
                                    fontSize: 12, fontWeight: 700,
                                    color: 'white', textAlign: 'center', paddingTop: 2
                                }}>
                                {unread}
                            </Text>
                        </View> : ""
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ChatBox