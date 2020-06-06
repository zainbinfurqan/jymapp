import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, ScrollView } from 'react-native'

function ProductList(props) {

    const [data, setData] = useState([
        { titile: "Soft cottom T-shirt", image: require('../assest/icons/t1.png'), price: "42$", category: "" },
        { titile: "Soft cottom T-shirt", image: require('../assest/icons/t2.png'), price: "23$", category: "" },
        { titile: "Soft cottom T-shirt", image: require('../assest/icons/t3.png'), price: "53$", category: "" },
        { titile: "Soft cottom T-shirt", image: require('../assest/icons/t4.png'), price: "12$", category: "" },
        { titile: "Soft cottom T-shirt", image: require('../assest/icons/t5.png'), price: "53$", category: "" },
        { titile: "Soft cottom T-shirt", image: require('../assest/icons/t6.png'), price: "22$", category: "" },
    ])

    return (
        <View style={{ flex: 1, }}>
            <View style={{ flexDirection: 'row', height: 70, backgroundColor:'#E1D413'}}>
                <View style={{ flex: 0.2, justifyContent: 'center' }}>
                    <Image style={{ height: 40, width: 40, alignSelf: 'center' }} source={require('../assest/icons/back.png')} />
                </View>
                <View style={{ flex: 0.6, justifyContent: 'center' }} >
                    <Text style={{ fontSize: 20, alignSelf: 'center' }}>Accessories</Text>
                </View>
                <View style={{ flex: 0.2, justifyContent: 'center', flexDirection: 'row' }}>
                    <Image style={{ height: 40, width: 40, alignSelf: 'center' }} source={require('../assest/icons/filter.png')} />
                    <Image style={{ height: 30, width: 30, alignSelf: 'center' }} source={require('../assest/icons/cart.png')} />
                </View>
            </View>
            <ScrollView>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View style={{
                            flex: 1, flexDirection: 'column', margin: 1,
                        }}>
                            <View style={{
                                height: 250,
                                shadowColor: "#F9F5F5",
                                shadowOffset: {
                                    width: 0,
                                    height: 0.5,
                                },
                                shadowOpacity: 0.3,
                                shadowRadius: 2.84,

                                elevation: 4, margin: 10,  borderRadius: 5, flexDirection: 'column'
                            }}>
                                <View style={{ backgroundColor: '#EDEAEA', margin: 20 }}>
                                    <Image style={{ height: 100, width: 100, alignSelf: 'center', margin: 10 }} source={item.image} />
                                </View>
                                <View style={{ marginLeft: 20 }}>
                                    <Text>{item.titile}</Text>
                                    <Text style={{ fontWeight: "700" }}>{item.price}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                    //Setting the number of column
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                />

            </ScrollView>
        </View>
    )
}

export default ProductList;