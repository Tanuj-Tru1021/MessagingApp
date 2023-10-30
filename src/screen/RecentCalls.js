import React, { useState } from 'react'
import { FlatList, View, Modal, TouchableOpacity, Image, Text } from 'react-native'
import ChatBox from '../components/ChatBox'
import Heading from '../components/Heading'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Away from "../../assets/svgicons/away.svg"
import Call from '../../assets/svgicons/call-icon.svg'
import { data2 } from '../Objects'
import InCall from '../../assets/svgicons/incoming-call.svg'
import OutMissed from '../../assets/svgicons/missed-outgoing.svg'
import Missed from '../../assets/svgicons/missed-call.svg'
import { callHistory } from '../Objects'


const RecentCalls = () => {
  const [show, setShow] = useState(false)
  return (
    <View
      style={{
        flex: 1, backgroundColor: '#F4F4F4', paddingHorizontal: 16
      }}>
      <Heading
        title={"Recent Calls"}
        mainStyle={{ left: 0 }}
        iconStyle={{ marginRight: 0 }}
      />
      <FlatList
        data={data2}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <ChatBox
              source={item.image}
              name={item.name}
              text={item.time}
              textStyle={{ paddingLeft: 8 }}
              unread={"0"}
              id={item.id}
              iconName={item.iconName}
              onPress={() => {
                setShow(!show)
              }}
              call={item.call}
              callType={item.type}
              active={item.active}
            />
          )
        }}
      />
      <View style={{ flexDirection: 'row-reverse' }}>
        <View
          style={{
            width: 56, height: 56,
            borderRadius: 28, backgroundColor: '#2F80ED',
            justifyContent: 'center', marginRight: 0,
            marginBottom: 32, alignItems: 'center'
          }}>
          <Call height={24} width={24} />
        </View>
      </View>
      <Modal
        visible={show}
        animationType='fade'
        transparent={true}
      >
        <TouchableOpacity onPress={() => setShow(false)} activeOpacity={1} style={{ height: '100%' }}>
          <View
            style={{
              marginTop: 200, marginHorizontal: 50,
              paddingVertical: 16, justifyContent: 'center',
              backgroundColor: 'white', elevation: 20, borderRadius: 8
            }} >
            <View
              style={{
                flexDirection: 'row', paddingHorizontal: 16,
                borderBottomWidth: 2, borderBottomColor: '#EBEBEB',
                marginBottom: 16, justifyContent: 'space-between', alignItems: 'center'
              }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ position: 'relative' }}>
                  <Image
                    source={require('../../assets/darlene.png')}
                    style={{ marginRight: 16 }}
                  />
                  <Away
                    height={12}
                    width={12}
                    style={{
                      position: 'absolute', bottom: 16, right: 16
                    }} />
                </View>
                <View
                  style={{
                    flexDirection: 'column', marginBottom: 16,
                  }}>
                  <Text
                    style={{
                      fontSize: 12, fontWeight: 400,
                      color: '#4F5E7B', marginVertical: 4
                    }}>
                    Call history
                  </Text>
                  <Text
                    style={{
                      fontSize: 14, fontWeight: 500,
                      color: '#1B1A57', marginBottom: 4
                    }}>
                    Darlene Steward
                  </Text>
                </View>
              </View>
              <Ionicon
                name='ellipsis-vertical'
                size={30} color={'#4F5E7B'}
                style={{ bottom: 5 }}
              />
            </View>
            <View
              style={{
                justifyContent: 'center', flexDirection: 'column'
              }}>
              {
                callHistory.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between'
                      }}>
                      <View style={{ flexDirection: 'row' }}>
                        {
                          item.calltype === "incoming" ? <InCall height={16} width={16} style={{ marginHorizontal: 8, top: 5 }} /> : 
                          item.calltype === "incoming missed" ? <Missed height={16} width={16} style={{ marginHorizontal: 8 }} /> :
                          item.calltype === "outgoing missed" ?  <OutMissed height={16} width={16} style={{ marginHorizontal: 8 }} /> : ""
                        }
                        <View>
                          <Text
                            style={{
                              fontSize: 12, fontWeight: 400, color: '#1B1A57'
                            }}>
                            {item.time}
                          </Text>
                          <Text
                            style={{
                              fontSize: 12, fontWeight: 400, color: '#4F5E7B'
                            }}>
                            {item.duration}
                          </Text>
                        </View>
                      </View>
                      <Ionicon
                        name={item.iconName}
                        size={20}
                        color={'#2F80ED'}
                        style={{ marginRight: 16 }}
                      />
                    </View>
                  )
                })
              }
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

export default RecentCalls