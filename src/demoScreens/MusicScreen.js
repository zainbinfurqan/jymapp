import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, ScrollView, ImageBackground } from 'react-native'

function AudioMusic(props) {

    const [data, setData] = useState([
        {},
        {},
        {},
        {},
        {},
        {},
    ])
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', height: 70, backgroundColor: '#A80D27' }}>
                <View style={{ flex: 0.2, justifyContent: 'center' }}>
                    <Image style={{ height: 40, width: 40, alignSelf: 'center' }} source={require('../assest/icons/back.png')} />
                </View>
                <View style={{ flex: 0.6, justifyContent: 'center' }} >
                    <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center' }}>Audio Music</Text>
                </View>
            </View>
            <View style={{ flexDirection: "column" }}>
                <ImageBackground style={{ height: 300, width: '100%' }} source={require('../assest/icons/music.jpg')}>
                    <Image style={{ margin: 10, height: 50, width: 50, }} source={require('../assest/icons/heart.png')} />
                    <Text style={{ margin: 10, color: 'white', alignSelf: "center", fontSize: 15 }}>Song Name</Text>
                </ImageBackground>
            </View>
            <View style={{ flexDirection: "row", height: 150, justifyContent: "center", alignItems: "center" }}>
                <View style={{ transform: [{ rotate: '180deg' }], margin: 10, backgroundColor: '#A80D27', flexDirection: "row", justifyContent: 'center', height: 80, width: 80, borderRadius: 50 }}>
                    <Image style={{ marginLeft: 5, height: 50, width: 50, alignSelf: "center" }} source={require('../assest/icons/farword.png')} />
                </View>
                <View style={{ margin: 10, backgroundColor: '#A80D27', justifyContent: 'center', height: 80, width: 80, borderRadius: 50 }}>
                    <Image style={{ marginLeft: 5, height: 40, width: 40, alignSelf: "center" }} source={require('../assest/icons/play.png')} />
                </View>
                <View style={{ margin: 10, backgroundColor: '#A80D27', justifyContent: 'center', height: 80, width: 80, borderRadius: 50 }}>
                    <Image style={{ height: 40, width: 40, alignSelf: "center" }} source={require('../assest/icons/pause.png')} />
                </View>
                <View style={{
                    elevation: 40,
                    margin: 10, backgroundColor: '#A80D27', justifyContent: 'center', height: 80, width: 80, borderRadius: 100 / 2,
                }}>
                    <Image style={{ marginLeft: 5, height: 50, width: 50, alignSelf: "center" }} source={require('../assest/icons/farword.png')} />
                </View>
            </View>
            <ScrollView>
                {data.map(itm => {
                    return (
                        <>
                            <View style={{ height: 100, flexDirection: 'row', marginTop: 10, flex: 1 }}>
                                <View style={{ margin: 10, borderRadius: 5, backgroundColor: '#A80D27', flex: 0.2, justifyContent: "center" }}>
                                    <Image style={{ marginLeft: 5, height: 40, width: 40, alignSelf: "center" }} source={require('../assest/icons/play.png')} />
                                </View>
                                <View style={{ flex: 0.6, justifyContent: "center" }}>
                                    <Text style={{ fontSize: 18 }}> My Name Is Khan</Text>
                                    <Text style={{ fontSize: 15 }}> Album: </Text>
                                </View>
                                <View style={{ borderWidth: 0.3, marginTop: 10, marginBottom: 10 }}></View>
                                <View style={{ flex: 0.2, justifyContent: 'center' }}>
                                    <Image style={{ marginLeft: 5, height: 40, width: 40, alignSelf: "center" }} source={require('../assest/icons/dost.png')} />
                                </View>
                            </View>
                            <View style={{ borderWidth: 0.2, marginLeft: 10, marginRight: 10 }}></View>
                        </>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default AudioMusic;