import React, { Component } from 'react';
import { Text, Button } from 'native-base'
import { ScrollView, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import { data } from '../../data/data'
import { connect } from "react-redux";
import gymMiddleware from '../../redux/middleware/gymMiddleware'
import { Loading } from '../../component/loading'

class JymList extends Component {
    constructor() {
        super()
        this.state = {
            gymList: []
        }
    }

    componentDidMount() {
        this.props.getGymList()
    }

    goToVideos = () => {
        this.props.navigation.navigate('SignleJymVideos')
    }

    render() {
        if (this.props.gyms.isLoadng) {
            return <Loading flag={this.props.gyms.isLoadng} />
        }
        else {
            return (
                <>
                    <SafeAreaView>
                        <ScrollView>
                            <View >
                                <View style={{ flex: 1, margin: 5, flexDirection: 'row', flexWrap: 'wrap', }}>
                                    {this.props.gyms.list.map(itm => {
                                        return (
                                            <View style={{
                                                width: '47%', marginTop: 0, height: 255, margin: 5, borderRadius: 5, shadowColor: "#43A3E3",
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 1,
                                                },
                                                shadowOpacity: 0.18,
                                                shadowRadius: 1.00,
                                                elevation: 1,
                                            }} >
                                                <View className='logo' style={{ height: '80%', padding: 10 }}>
                                                    <Image source={require('../../assest/images/logo-1.png')} style={{ width: '100%', height: '80%' }} />
                                                </View>
                                                <TouchableOpacity style={{ height: 10, height: '20%' }} onPress={this.goToVideos} >
                                                    <Text style={{ fontWeight: '700', textAlign: 'center' }}>{itm.jymName}</Text>
                                                    <Text style={{ fontWeight: '700', textAlign: 'center', color: '#5DADE2' }}>Go To Videos</Text>
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
}

const mapStateToProps = state => {
    return {
        gyms: state.gymList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGymList: () => { return dispatch(gymMiddleware.getGymList()); }
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JymList);
