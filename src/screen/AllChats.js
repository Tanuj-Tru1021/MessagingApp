import React, { useRef } from 'react'
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import BottomSheet from '../components/CreateCategoryBottomSheet';
import ChatBox from '../components/ChatBox';
import Heading from '../components/Heading';
import { Modalize } from 'react-native-modalize';
import Chat from '../../assets/svgicons/chat-icon.svg'
import { data, data1 } from '../Objects';

const AllChats = ({ navigation }) => {
    const modalizeRef = useRef();
    const onOpen = () => {
        modalizeRef?.current?.open();
    };
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{ paddingHorizontal: 16 }}
            >
                <Heading title={"Recent Chats"} />
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ flexDirection: 'row' }}
                >
                    {
                        data.map((item, index) => {
                            return (
                                <View
                                    key={index}
                                    style={{
                                        marginTop: 5,
                                        backgroundColor: item.id === '1' ? '#2F80ED' : 'white', borderRadius: 4, marginRight: 24
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 12, fontWeight: 400,
                                            paddingVertical: 4, paddingHorizontal: 8, color: item.id === '1' ? 'white' : 'grey'
                                        }}>
                                        {item.text}
                                    </Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <View style={{ marginTop: 24 }}>
                    <FlatList
                        contentContainerStyle={{ paddingBottom: 8 }}
                        data={data1}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <ChatBox
                                    source={item.image}
                                    unread={item.unread}
                                    mainStyle={{ backgroundColor: item.name === "Darlene Steward" ? "#E1E9FD" : "" }}
                                    imageStyle={{ marginLeft: 8 }}
                                    name={item.name}
                                    text={item.text}
                                    time={item.time}
                                    id={item.id}
                                    onPress={() => navigation.navigate('Fullsnack')}
                                    callType={'0'}
                                    active={item.active}
                                    textStyle={{ marginLeft: item.id === "4" ? 4 : 0}}
                                    call={item.call}
                                />
                            )
                        }}
                    />
                </View>
            </View>
            <View
                style={{
                    bottom:0, right: 16, position: 'absolute'
                }}>
                <TouchableOpacity
                    style={{
                        width: 56, height: 56,
                        borderRadius: 28, backgroundColor: '#2F80ED',
                        justifyContent: 'center',
                        marginBottom: 32, alignItems: 'center'
                    }}
                    onPress={onOpen}
                >
                    <Chat height={24} width={24} />
                </TouchableOpacity>
            </View>
            <Modalize
                ref={modalizeRef}
                snapPoint={470}
                modalHeight={700}
                closeSnapPointStraightEnabled={false}
                scrollViewProps={{ showsVerticalScrollIndicator: false }}
                rootStyle={{ borderRadius: 16 }}
            >
                <BottomSheet />
            </Modalize>
        </View>
    )
}

export default AllChats