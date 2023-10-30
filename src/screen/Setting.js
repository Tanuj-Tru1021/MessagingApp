import React from 'react'
import { View, ScrollView } from 'react-native'
import ChatBox from '../components/ChatBox'
import SettingOptions from '../components/SettingOptions'
import Heading from '../components/Heading'
import { settingOptions } from '../Objects'

const Setting = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#F4F4F4', paddingHorizontal: 16 }}>
      <Heading title={"Settings"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            borderBottomWidth: 2, borderBottomColor: '#EBEBEB'
          }}>
          <ChatBox
            mainStyle={{ marginBottom: 30 }}
            unread={"0"}
            source={require("../../assets/adina.png")}
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
              <SettingOptions key={index} text={item.text} icon1={item.iconName1} icon2={item.iconName2} id={item.id}/>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default Setting