import React, { useRef } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, } from 'react-native'
import ChatBox from '../components/ChatBox';
import Heading from '../components/Heading';
import { Modalize } from 'react-native-modalize';
import Chat from '../../assets/svgicons/chat-icon.svg'
import { data, data1, suggestions, includedChats } from '../Objects';
import Away from '../../assets/svgicons/away.svg'

const AllChats = ({ navigation }) => {
    const CreateCategoryBottomSheetRef = useRef();

    const onOpen = () => {
        CreateCategoryBottomSheetRef?.current?.open();
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#F6F6F6', paddingHorizontal: 16 }}>
            <Heading title={"Recent Chats"} />
            <FlatList
                data={data1}
                ListHeaderComponentStyle={{ marginBottom: 24 }}
                ListHeaderComponent={<>
                    <FlatList
                        horizontal={true}
                        scrollEventThrottle={16}
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 15 }}
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                            <View
                                key={index}
                                style={{
                                    marginTop: 5,
                                    backgroundColor: item.id === '1' ? '#2F80ED' : 'white', borderRadius: 4, marginRight: 24, height: 25
                                }}>
                                <Text
                                    style={{
                                        fontSize: 12, fontWeight: 400,
                                        paddingVertical: 4, paddingHorizontal: 8, color: item.id === '1' ? 'white' : 'grey'
                                    }}>
                                    {item.text}
                                </Text>
                            </View>
                        }
                        ListFooterComponent={<View style={{ width: 10 }} />}
                    />
                </>}
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
                            onPress={() => navigation.navigate('GroupChat')}
                            callType={'0'}
                            active={item.active}
                            textStyle={{ marginLeft: item.id === "4" ? 4 : 0 }}
                            call={item.call}
                        />
                    )
                }}
            />
            <View
                style={{
                    bottom: 30, right: 16, position: 'absolute'
                }}>
                <TouchableOpacity
                    style={{
                        width: 56, height: 56,
                        borderRadius: 28, backgroundColor: '#2F80ED',
                        justifyContent: 'center', alignItems: 'center'
                    }}
                    onPress={onOpen}
                >
                    <Chat height={24} width={24} />
                </TouchableOpacity>
            </View>

            <Modalize
                ref={CreateCategoryBottomSheetRef}
                handlePosition={'inside'}
                adjustToContentHeight={true}
                scrollViewProps={{ showsVerticalScrollIndicator: false }}
                rootStyle={{ borderRadius: 16 }}
            >
                <CreateCategoryBottomSheet />
            </Modalize>
        </View>
    )
}

export default AllChats


const CreateCategoryBottomSheet = () => {
    return (
        <View style={{
            flex: 1, paddingHorizontal: 16,
            backgroundColor: 'white', borderRadius: 16
        }}>
            <Text
                style={{
                    fontSize: 18, fontWeight: 500,
                    color: '#1B1A57', marginTop: 36
                }}>
                Create a new category
            </Text>
            <View
                style={{
                    flexDirection: 'row', paddingTop: 15,
                    justifyContent: 'space-between'
                }}>
                <TextInput
                    placeholder='Workmates'
                    placeholderTextColor={"#1B1A57"}
                    style={{
                        marginRight: 17, width: '80%',
                        borderBottomWidth: 2, borderBottomColor: '#2F80ED'
                    }} />
                <TouchableOpacity
                    style={{
                        backgroundColor: '#2F80ED',
                        borderRadius: 4, justifyContent: 'center',
                        alignItems: 'center', height: 30, top: 18
                    }}>
                    <Text
                        style={{
                            fontSize: 14, fontWeight: 500,
                            color: "#fff", paddingHorizontal: 10
                        }}>
                        Create
                    </Text>
                </TouchableOpacity>
            </View>
            <Text
                style={{
                    fontSize: 12, fontWeight: 700,
                    color: 'grey', marginTop: 24
                }}>
                Suggested :
            </Text>
            <View
                style={{ flexDirection: 'row', marginTop: 16 }}
            >
                {
                    suggestions.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={{
                                    backgroundColor: '#2F80ED', borderRadius: 4,
                                    justifyContent: 'center', alignItems: 'center', marginRight: 16
                                }}>
                                <Text
                                    style={{
                                        fontSize: 14, fontWeight: 500,
                                        color: "#fff", paddingHorizontal: 16,
                                        paddingVertical: 4
                                    }}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <View
                style={{
                    marginTop: 36, justifyContent: 'space-between',
                    flexDirection: 'row'
                }}>
                <Text
                    style={{
                        fontSize: 12, fontWeight: 700, color: 'grey'
                    }}>
                    Included chats (3)
                </Text>
                <Text
                    style={{
                        fontSize: 12, fontWeight: 700, color: '#2F80ED'
                    }}>
                    + Add chats
                </Text>
            </View>
            <View style={{ marginTop: 16 }}>
                {
                    includedChats.map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    flexDirection: 'row'
                                }}>
                                <View
                                    style={{
                                        position: 'relative'
                                    }}>
                                    <Image
                                        source={item.source}
                                        style={{ marginVertical: 12, marginRight: 16 }}
                                    />
                                    <Away
                                        height={12}
                                        width={12}
                                        style={{
                                            position: 'absolute', bottom: 12, right: 16
                                        }} />
                                </View>
                                <Text
                                    style={{
                                        fontSize: 14, fontWeight: 400,
                                        color: '#1B1A57', marginVertical: 23
                                    }}>
                                    {item.name}
                                </Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}