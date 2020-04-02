import React, { Component } from 'react';
import { Text, ScrollView, SafeAreaView, View } from 'react-native'
import { data } from '../../../../../data/data'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
export default class Home extends Component {
    render() {
        return (
            <>
                <SafeAreaView>
                    <ScrollView>
                        <View >
                            <View style={{ height: 50, borderWidth: 1 }}>
                                <Text>{data[0].jymName}</Text>
                            </View>
                            <View style={{ flex: 1, margin: 5, flexDirection: 'row', flexWrap: 'wrap', }}>
                                {data[0].data.map(itm => {
                                    return (
                                        <View style={{ width: '47%', marginTop: 0, height: 255, margin: 5, borderRadius: 5, borderWidth: 1 }} >
                                            <TouchableOpacity style={{ height: 10, borderWidth: 1, height: 40 }} onPress={this.gotoJym} >
                                                <Text>{itm.vedioTitle}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>

            </>
        )
    }
}