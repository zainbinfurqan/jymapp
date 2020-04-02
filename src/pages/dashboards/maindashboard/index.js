import React, { Component } from 'react';
import { Text, ScrollView, SafeAreaView, View } from 'react-native'
import MuscleZone from '../jymdashboards/musclezone/Home'
import ShamsuddinClub from '../jymdashboards/shamsuddin/Home'
import { stylesheet } from '../../../stylsheet/main.stylesheet'
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default class MainDashboard extends Component {

    constructor() {
        super()
        this.state = {
            data: [{ name: 'zain', routeName: 'MuscleZone' },
            { name: 'zain', routeName: 'ShamsuddinClub' },]
        }
    }

    gotoJym = () => {
        // this.props.navigation.navigate('Details')
    }

    render() {
        return (
            <>

              
            </>
        )
    }
}