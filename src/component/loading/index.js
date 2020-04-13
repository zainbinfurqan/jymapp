import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native'
import { View } from 'native-base';

export const Loading = (props) => {
    return (
        <>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 3, backgroundColor: 'grey',justifyContent:'center' }} >
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            </View>
        </>
    )
}
