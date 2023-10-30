import React, { useRef, useEffect, useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import ChatBox from '../components/ChatBox'
import BottomSheet2 from '../components/ChannelsBottomSheet';
import Ionicon from 'react-native-vector-icons/Ionicons'
import { Modalize } from 'react-native-modalize';
import Online from '../../assets/svgicons/online.svg'


const Fullsnack = ({ navigation }) => {
  const [val, setVal] = useState("")
  let name1 = 'mic'
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none"
      }
    });
    return () => navigation.getParent()?.setOptions({
      tabBarStyle: undefined
    });
  }, [navigation]);
  const modalizeRef = useRef();
  const onOpen = () => {
    modalizeRef?.current?.open();
  };
  return (
    <>
      <View
        style={{
          flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: '#EDEDED', paddingBottom: 13, paddingHorizontal: 8
        }}>
        <TouchableOpacity
          style={{ paddingTop: 28 }}
          onPress={() => navigation.navigate('MainChats')}
        >
          <Ionicon
            name='arrow-back'
            size={24}
            color={'grey'}
          />
        </TouchableOpacity>
        <ChatBox
          mainStyle={{ width: '65%' }}
          source={require("../../assets/ronald.png")}
          imageStyle={{ paddingLeft: 12, marginTop: 5 }}
          name={"Fullsnack Designers"}
          text={"7 Online, from 12 peoples"}
          nameStyle={{ paddingTop: 17, top: 0, fontSize: 18 }}
          textStyle={{ bottom: 4 }}
          unread={"0"}
          onPress={() => navigation.navigate('FullsnackDetails')}
          callType={'0'}
        />
        <Ionicon
          name='videocam'
          size={24}
          color={'grey'}
          style={{
            paddingTop: 28, marginRight: 18, marginLeft: 60
          }} />
        <Ionicon
          name='ellipsis-vertical'
          size={24}
          color={'grey'}
          style={{ paddingTop: 28 }}
        />
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#F4F4F4' }}>
        <View
          style={{
            flexDirection: 'column', backgroundColor: "#F7F7F7",
            marginLeft: 64, marginRight: 49,
            marginTop: 23, borderRadius: 8
          }}>
          <View
            style={{
              flexDirection: 'row', paddingHorizontal: 10,
              paddingTop: 8, justifyContent: 'space-between'
            }}>
            <Text
              style={{
                fontSize: 12, color: 'orange', fontWeight: 500
              }}>
              Mike Mazowski
            </Text>
            <Text
              style={{
                fontSize: 12, color: "#A1A1BC", fontWeight: 400
              }}>
              admin
            </Text>
          </View>
          <View
            style={{
              paddingTop: 10, paddingHorizontal: 10,
              paddingBottom: 8, flexDirection: 'column'
            }}>
            <Text
              style={{
                fontSize: 12, color: "#1B1A57", fontWeight: 400
              }}>
              Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination
            </Text>
            <Text
              style={{
                fontSize: 12, fontWeight: 400,
                color: '#A1A1BC', textAlign: 'right'
              }}>
              16.04
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 8, marginLeft: 64,
            marginRight: 107, position: 'relative'
          }}>
          <Image
            source={require("../../assets/bali1.png")}
            style={{ height: 100 }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row', marginLeft: 16, marginTop: 4
          }}>
          <View>
            <Image
              source={require("../../assets/mike.png")}
              style={{ marginRight: 8, marginTop: 64 }}
            />
            <Online
              height={12}
              width={12}
              style={{
                position: 'absolute', bottom: 0, right: 6
              }}
            />
          </View>
          <Image
            source={require("../../assets/bali2.png")}
            style={{ marginRight: 4 }}
          />
          <Image
            source={require("../../assets/bali3.png")}
          />
        </View>
        <View
          style={{ flexDirection: 'row-reverse', marginTop: 16 }}
        >
          <Image
            source={require('../../assets/adina2.png')}
            style={{ marginRight: 16, marginTop: 46 }}
          />
          <Online
            height={12}
            width={12}
            style={{
              position: 'absolute', bottom: 0, left: 16
            }}
          />
          <View
            style={{
              backgroundColor: '#2F80ED', marginLeft: 111,
              marginRight: 8, paddingHorizontal: 8,
              paddingVertical: 10, borderTopLeftRadius: 8,
              borderTopRightRadius: 8, borderBottomLeftRadius: 8
            }}>
            <Text
              style={{
                fontSize: 12, fontWeight: 400, color: 'white', maxWidth: 260
              }}>
              That's very nice place! you guys made a very good decision. Can't wait to go on vacation!
            </Text>
            <Text
              style={{
                color: 'white', fontSize: 12,
                fontWeight: 400, textAlign: 'right',
                paddingRight: 10, paddingTop: 15
              }}>
              16.04
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 19, flexDirection: 'row',
            justifyContent: 'center', marginBottom: 40
          }}>
          <Ionicon
            name='ellipsis-horizontal'
            size={15}
            color={'#4F5E7B'}
            style={{ paddingRight: 10 }}
          />
          <Image
            source={require("../../assets/typing1.png")}
          />
          <Image
            source={require("../../assets/typing2.png")}
            style={{ left: -7 }}
          />
          <Image
            source={require("../../assets/typing3.png")}
            style={{ left: -14 }}
          />
          <Text
            style={{
              fontSize: 12, fontWeight: 400,
              color: '#4F5E78', marginLeft: 1
            }}>
            +2 others are typing
          </Text>
        </View>
      </ScrollView>

      <Modalize
        ref={modalizeRef}
        snapPoint={250}
        closeSnapPointStraightEnabled={false}
        scrollViewProps={{ showsVerticalScrollIndicator: false }} >
        <BottomSheet2 />
      </Modalize>
      <TouchableOpacity onPress={onOpen}>
        <View
          style={{
            flexDirection: 'row', paddingVertical: 12,
            paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: '#EDEDED', backgroundColor: '#FFFFFF'
          }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
            <Text
              style={{
                fontSize: 12, fontWeight: 500, color: '#2F80ED'
              }}>
              # General
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Ionicon
                name='chevron-up'
                size={16}
                color={'#2F80ED'}
              />
              <Ionicon
                name='ellipsis-vertical'
                size={16}
                style={{ paddingLeft: 24 }}
                color={'#2F80ED'}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, backgroundColor: '#FFFFFF' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../../assets/emoji.png')}
          />
          <TextInput
            style={{
              paddingLeft: 16,
            }}
            placeholder='Write a message...'
            placeholderTextColor={'grey'}
            value={val}
            onChangeText={(text) => {
              setVal(text)
              name1 = 'send'
            }}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Ionicon
            name='attach'
            size={24}
            color={'grey'}
            style={{ marginRight: 24 }}
          />
          <TouchableOpacity
            activeOpacity={1}
            style={{
              width: 40, height: 40,
              borderRadius: 20, backgroundColor: '#2F80ED',
              justifyContent: 'center', alignItems: 'center'
            }}>
            <Ionicon
              name={name1}
              size={24}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Fullsnack