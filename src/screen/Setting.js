import React, { useState } from 'react'
import { View, ScrollView, Text } from 'react-native'
import ChatBox from '../components/ChatBox'
import Heading from '../components/Heading'
import { settingOptions } from '../Objects'
import Ionicon from 'react-native-vector-icons/Ionicons'
import ToggleSwitch from 'toggle-switch-react-native'
import Adina from '../../assets/adina.png'

const Setting = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#F6F6F6', paddingHorizontal: 16 }}>
      <Heading title={"Settings"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            borderBottomWidth: 2, borderBottomColor: '#EBEBEB'
          }}>
          <ChatBox
            mainStyle={{ marginBottom: 30 }}
            unread={"0"}
            source={Adina}
            name={"Adina Nurrahama"}
            nameStyle={{ fontSize: 18, paddingTop: 30 }}
            text={"Trust your feelings , be a good human beings"}
            textStyle={{ width: 175, height: 50 }}
            callType={'0'}
          />
        </View>
        {
          settingOptions.map((item, index) => {
            return (
              <View key={index}>
                <SettingOptions text={item.text} icon1={item.iconName1} icon2={item.iconName2} id={item.id} />
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default Setting

const SettingOptions = ({ text, icon1, icon2, id }) => {
  const [val, setVal] = useState(true)
  const toggle = () => {
    setVal(!val)
  }
  return (
    <View
      style={{
        flex: 1,
        width: '100%', height: 64,
        flexDirection: 'row', borderRadius: 8,
        paddingTop: 40, marginBottom: 20, justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center', alignItems: 'center'
        }}>
        <Ionicon
          name={icon1}
          size={24}
          color={'#2F80ED'}
        />
        <Text
          style={{
            paddingLeft: 16, fontSize: 14,
            fontWeight: 400, color: '#4F5E7B', paddingTop: 2
          }}>
          {text}
        </Text>
      </View>
      {
        id === "1" ?
          <ToggleSwitch
            isOn={val}
            onColor='#2F80ED'
            offColor='grey'
            size='small'
            onToggle={isOn => toggle()}
          />  :
          <Ionicon name={icon2} color={'grey'} size={24} />
      }
    </View>
  )
}