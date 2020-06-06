import React, { useState, useEffect } from 'react'
import { View, Text, Animated, ScrollView, Image, ImageBackground, FlatList } from 'react-native'

const HEADER_MAX_HEIGHT = 500;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

function SingleProduct(props) {
    const [data, setData] = useState([
        {},
        {},
        {},
        {},
        {},
        {},

    ])

    const [scrollY, setScrollY] = useState(
        new Animated.Value(0),
    )

    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 1, 0],
        extrapolate: 'clamp',
    });
    const imageTranslate = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, -50],
        extrapolate: 'clamp',
    });
    return (
        <View style={{ flex: 1, borderWidth: 2, borderColor: 'red' }}>
            {console.log(headerHeight)}
            <ScrollView scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }]
                )}>
                <View style={{ marginTop: HEADER_MAX_HEIGHT }}>
                    <View style={{
                        alignSelf: 'center', borderWidth: 1,
                        height: 10, width: 100, borderRadius: 10, margin: 10,
                        backgroundColor: 'black'
                    }}></View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 0.5, justifyContent: 'center', flexDirection: 'row', margin: 10, borderWidth: 1, height: 50 }}>
                                <Text style={{ alignSelf: "center" }}>Quntity</Text>
                                <Image style={{ margin: 10, marginTop: 15, alignSelf: "center", height: 20, width: 20 }} source={require('../assest/icons/dropdown.png')} />
                            </View>
                            <View style={{ flex: 0.5, justifyContent: 'center', flexDirection: 'row', margin: 10, borderWidth: 1, height: 50 }}>
                                <Text style={{ alignSelf: "center" }}>Size</Text>
                                <Image style={{ margin: 10, marginTop: 15, alignSelf: "center", height: 20, width: 20 }} source={require('../assest/icons/dropdown.png')} />
                            </View>
                            <View style={{ flex: 0.5, justifyContent: 'center', flexDirection: 'row', margin: 10, borderWidth: 1, height: 50 }}>
                                <Text style={{ alignSelf: "center" }}>Color</Text>
                                <Image style={{ margin: 10, marginTop: 15, alignSelf: "center", height: 20, width: 20 }} source={require('../assest/icons/dropdown.png')} />
                            </View>
                        </View>
                        <View style={{ height: 200, padding: 30 }}>
                            <Text style={{ fontWeight: "500", textAlign: 'center', fontSize: 25 }}>Cottom T-Shirts</Text>
                            <Text style={{ fontWeight: "500", fontSize: 25 }}>Category : T-Shirts</Text>
                            <Text style={{ fontWeight: "500", fontSize: 25 }}>Code : ERD44</Text>
                            <Text style={{ fontWeight: "500", fontSize: 25 }}>$24</Text>
                        </View>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <View style={{
                                height: 150, width: '50%',justifyContent:'center', borderWidth: 1, margin: 5
                            }}>
                                <Text style={{ textAlign: 'center' }}> Some More Products </Text>
                            </View>
                        )}
                        //Setting the number of column
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

            </ScrollView>
            <Animated.View style={[{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: '#03A9F4',
                overflow: 'hidden',
            }, { height: headerHeight }]}>
                <Animated.Image
                    style={[
                        {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            width: null,
                            height: HEADER_MAX_HEIGHT,
                            // resizeMode: 'cover',
                        },
                        { opacity: imageOpacity, transform: [{ translateY: imageTranslate }] },
                    ]}
                    source={require('../assest/icons/t-1.png')}
                    useNativeDriver={true}  >

                </Animated.Image>
                <Animated.View >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image style={{ margin: 12, alignSelf: 'center', height: 42, width: 30 }} source={require('../assest/icons/heart-1.png')} />
                        <Image style={{ margin: 12, alignSelf: 'center', height: 40, width: 40 }} source={require('../assest/icons/cart.png')} />
                    </View>
                </Animated.View>

            </Animated.View>
        </View>
    )
}

export default SingleProduct;