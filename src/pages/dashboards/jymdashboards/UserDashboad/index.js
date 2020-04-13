import React, { Component } from 'react';
import { ScrollView, SafeAreaView, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import { Text, Button, Content, Card, CardItem, Body } from 'native-base'
import { color } from 'react-native-reanimated';

const win = Dimensions.get('window');
const ratio = win.width / 541;
export default class UserDashboard extends Component {
    constructor() {
        super()
        this.state = {
            data: [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '5' }]
        }
    }

    UploadVideoForm = () => {
        this.props.navigation.navigate('SignleJymVideos')
    }

    render() {
        return (
            <>
                <ScrollView>
                    <View style={{ flex: 1, flexDirection: 'column', margin: 10 }}>
                        <View style={{
                            alignItems: 'center', justifyContent: 'center',
                        }}>
                            <Image source={require('../../../../assest/images/logo-3.png')} resizeMode={'contain'} style={{
                                flex: 1,
                                alignSelf: 'stretch',
                                width: win.width,
                                height: 200 * ratio,
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.18,
                                shadowRadius: 1.00,

                                elevation: 1,
                            }} />

                        </View>
                        <Content>
                            <Card>
                                <CardItem>
                                    <Body style={{ color: '#43A3E3' }}>
                                        <Text style={{ fontSize: 14, color: '#43A3E3', fontWeight: '700' }}>Name : Jym Name </Text>
                                        <Text style={{ fontSize: 14, color: '#43A3E3', fontWeight: '700' }}>Email : Zain.ahmed199524@gmail.com </Text>
                                        <Text style={{ fontSize: 14, color: '#43A3E3', fontWeight: '700' }}>Phone : 03022408099 </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                        <Content >
                            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                                {this.state.data.map(itm => {
                                    return (
                                        <View style={{ width: '50%' }}>
                                            <Card style={{ height: 150 }} >
                                                <CardItem >
                                                    <Body style={{ color: '#43A3E3' }}>
                                                        <Text>{itm.name}</Text>
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        </View>
                                    )
                                })}
                            </View>
                        </Content>
                        <Button info><Text style={{ width: '100%', textAlign: 'center' }}> Upload Video </Text></Button>
                    </View>
                </ScrollView>
            </>
        )
    }
}