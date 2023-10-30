import React, {useState} from 'react'
import { View, Text } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { Switch } from 'react-native-switch';

const SettingOptions = ({ text, icon1, icon2, key, id }) => {
  const [val, setVal] = useState(true)
  const toggle = () => {
    setVal(!val)
  }
  return (
    <View
      key={key}
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
        <Switch 
        value={val} 
        onValueChange={() => toggle()} 
        disabled={false} 
        circleSize={24} 
        barHeight={24} 
        backgroundActive={'#E1E9FD'} 
        backgroundInactive={'lightgrey'} 
        circleActiveColor={'#2F80ED'} 
        circleInActiveColor={'grey'} 
        containerStyle={{right: 11}}/> : 
        <Ionicon name={icon2} color={'grey'} size={24}/>
      }
    </View>
  )
}
        
export default SettingOptions