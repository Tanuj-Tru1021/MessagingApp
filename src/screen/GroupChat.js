import React, { useRef, useEffect, useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { Modalize } from 'react-native-modalize';
import Online from '../../assets/svgicons/online.svg'
import { texts } from '../Objects';
import Ronald from '../../assets/ronald.png'
import Bali1 from '../../assets/bali1.png'
import Bali2 from '../../assets/bali2.png'
import Bali3 from '../../assets/bali3.png'
import Mike from '../../assets/mike.png'
import Adina from '../../assets/adina2.png'
import Typing1 from '../../assets/typing1.png'
import Typing2 from '../../assets/typing2.png'
import Typing3 from '../../assets/typing3.png'
import Emoji from '../../assets/emoji.png'


const GroupChat = ({ navigation }) => {
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
  const ChannelsBottomSheetRef = useRef();
  const onOpen = () => {
    ChannelsBottomSheetRef?.current?.open();
  };
  return (
    <>
      <View
        style={{
          flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: '#EDEDED', paddingBottom: 13, paddingHorizontal: 8, backgroundColor:'#F6F6F6'
        }}>
        <TouchableOpacity
          style={{ paddingTop: 28 }}
          onPress={() => navigation.navigate('AllChats')}
        >
          <Ionicon
            name='arrow-back'
            size={24}
            color={'grey'}
          />
        </TouchableOpacity>
        <View style={{ flex: 1, flexDirection: 'row', marginLeft: 12, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', paddingTop: 14 }}>
            <Image
              source={Ronald}
              style={{ marginRight: 10 }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('GroupChatDetails')}>
              <Text style={{ fontSize: 18, fontWeight: 500, color: '#1B1A57' }}>
                Fullsnack Designers
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 400, color: '#4F5E7B', paddingTop: 2 }}>
                7 Online, from 12 peoples
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Ionicon
              name='videocam'
              size={24}
              color={'grey'}
              style={{
                paddingTop: 28, marginRight: 18
              }} />
            <Ionicon
              name='ellipsis-vertical'
              size={24}
              color={'grey'}
              style={{ paddingTop: 28 }}
            />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#F6F6F6' }}>
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
            source={Bali1}
            style={{ height: 100 }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row', marginLeft: 16, marginTop: 4
          }}>
          <View>
            <Image
              source={Mike}
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
            source={Bali2}
            style={{ marginRight: 4 }}
          />
          <Image
            source={Bali3}
          />
        </View>
        <View
          style={{ flexDirection: 'row-reverse', marginTop: 16 }}
        >
          <Image
            source={Adina}
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
            source={Typing1}
          />
          <Image
            source={Typing2}
            style={{ left: -7 }}
          />
          <Image
            source={Typing3}
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
        ref={ChannelsBottomSheetRef}
        handlePosition={'inside'}
        adjustToContentHeight={true}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        rootStyle={{ borderRadius: 16 }}>
        <ChannelsBottomSheet />
      </Modalize>
      <TouchableOpacity onPress={onOpen}>
        <View
          style={{
            flexDirection: 'row', paddingVertical: 12,
            paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: '#EDEDED', backgroundColor: '#FFFFFF', borderTopLeftRadius: 8, borderTopRightRadius: 8
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
            source={Emoji}
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

export default GroupChat

const ChannelsBottomSheet = () => {
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