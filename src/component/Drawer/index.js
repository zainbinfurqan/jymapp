import React, { } from 'react';
import { View, Text } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();


function Tab1() {
    return (
        <>
            <View style={{ justifyContent: 'center', flex: 1 }}>
                <Text style={{ alignSelf: 'center' }}>Tab-1</Text>
            </View>
        </>
    )
}

function Tab2() {
    return (
        <>
            <View style={{ justifyContent: 'center', flex: 1 }}>
                <Text style={{ alignSelf: 'center' }}>Tab-2</Text>
            </View>
        </>
    )
}



function Home() {
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }} name="Tab1" component={Tab1} />
                <Tab.Screen options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }} name="Tab2" component={Tab2} />
            </Tab.Navigator>
        </>
    )
}


function Article() {
    return (
        <>
            <View style={{ justifyContent: 'center', flex: 1 }}>
                <Text style={{ alignSelf: 'center' }}>Artical</Text>
            </View>
        </>
    )
}

function Drawer_(props) {
    return (
        <>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Article" component={Article} />
            </Drawer.Navigator>
        </>
    )
}

export default Drawer_