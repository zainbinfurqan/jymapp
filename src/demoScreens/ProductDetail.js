import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, ScrollView } from 'react-native'

function ProductDetail(props) {

    const [data, setData] = useState([
        { titile: "Soft cottom T-shirt", image: require('../assest/icons/t1.png'), price: "42$", category: "", code: "DE342" },
        { titile: "Soft cottom T-shirt", image: require('../assest/icons/t2.png'), price: "23$", category: "", code: "DE342" },
        { titile: "Soft cottom T-shirt", image: require('../assest/icons/t3.png'), price: "53$", category: "", code: "DE342" },
        { titile: "Soft cottom T-shirt", image: require('../assest/icons/t4.png'), price: "12$", category: "", code: "DE342" },
        { titile: "Soft cottom T-shirt", image: require('../assest/icons/t5.png'), price: "53$", category: "", code: "DE342" },
        { titile: "Soft cottom T-shirt", image: require('../assest/icons/t6.png'), price: "22$", category: "", code: "DE342" },
    ])

    return (
        <View style={{ flex: 1, }}>
            <View style={{ flexDirection: 'row', height: 70, backgroundColor: '#E1D413' }}>
                <View style={{ flex: 0.2, justifyContent: 'center' }}>
                    <Image style={{ height: 40, width: 40, alignSelf: 'center' }} source={require('../assest/icons/back.png')} />
                </View>
                <View style={{ flex: 0.6, justifyContent: 'center' }} >
                    <Text style={{ fontSize: 20, alignSelf: 'center' }}>Cart</Text>
                </View>
                {/* <View style={{ flex: 0.2, justifyContent: 'center', flexDirection: 'row' }}>
                    <Image style={{ height: 40, width: 40, alignSelf: 'center' }} source={require('../assest/icons/filter.png')} />
                    <Image style={{ height: 30, width: 30, alignSelf: 'center' }} source={require('../assest/icons/cart.png')} />
                </View> */}
            </View>
            <ScrollView>
                {data.map(itm => {
                    return (
                        <>
                            <View style={{ height: 200, marginTop: 10, flexDirection: 'row' }}>
                                <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                    <Image style={{ height: 150, width: 150, alignSelf: "center" }} source={itm.image} />
                                </View>
                                <View style={{ flex: 0.6, paddingTop: 15, }}>
                                    <Text style={{ marginLeft: 10 }}>{itm.code}</Text>
                                    <Text style={{ marginLeft: 10 }}>{itm.titile}</Text>
                                    <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                                        <View style={{ borderWidth: 1, flexDirection: "row", justifyContent: "center", margin: 5, width: 100, height: 30 }}>
                                            <Text style={{ alignSelf: "center", marginRight: 5 }}>Quntity</Text>
                                            <Image style={{ alignSelf: "center", marginLeft: 5, height: 14, width: 14 }} source={require('../assest/icons/dropdown.png')} />
                                        </View>
                                        <View style={{ borderWidth: 1, flexDirection: "row", justifyContent: "center", margin: 5, width: 80, height: 30 }}>
                                            <Text style={{ alignSelf: "center", marginRight: 5 }}>Size</Text>
                                            <Image style={{ alignSelf: "center", marginLeft: 5, height: 14, width: 14 }} source={require('../assest/icons/dropdown.png')} />
                                        </View>
                                    </View>
                                    <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>{itm.price}</Text>
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
export default ProductDetail