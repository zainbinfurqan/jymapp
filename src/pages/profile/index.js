import React, { Component } from "react";
import { View, Text, Button } from "native-base";
import { ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon_ from 'react-native-vector-icons/Octicons';

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userProfileData: []
        }
    }
    componentDidMount() {
        this.setState({ userProfileData: this.props.authData.userData })
    }

    goToUploadVideo = () => {
        console.log("upload")
        this.props.navigation.navigate('UploadVideoForm')
    }

    render() {
        const { userProfileData } = this.state
        return (
            <>
                <View style={{ flex: 1 }}>
                    <View style={{ height: 200, backgroundColor: 'grey', justifyContent: 'center', padding: 15 }} >
                        <Image source={require('../../assest/images/logo-1.png')} style={{ alignSelf: 'center', width: '50%', height: '100%' }} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', padding: 5, maxHeight: 30, justifyContent: 'center' }}>
                        <Text style={{ color: '#43A3E3', fontWeight: '700' }}>{userProfileData.fullName}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', padding: 5, maxHeight: 30, }}>
                        <Icon size={20} color="#43A3E3" name="email" style={{ paddingRight: 4 }} />
                        <Text style={{ color: '#43A3E3', fontWeight: '700' }}>{userProfileData.email}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', padding: 5, maxHeight: 30, }}>
                        {userProfileData.phoneVerified ?
                            <Icon size={20} color="green" name="verified-user" style={{ paddingRight: 4 }} /> :
                            <Icon_ size={20} color="red" name="unverified" style={{ paddingRight: 4 }} />}
                        <Text style={{ color: '#43A3E3', fontWeight: '700' }}>Email    {userProfileData.emailVerified ?
                            <Text style={{ color: 'green' }}>Verified</Text> :
                            <Text style={{ color: 'red' }}>Not Verified</Text>}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', padding: 5, maxHeight: 30, }}>
                        {userProfileData.phoneVerified ?
                            <Icon size={20} color="green" name="verified-user" style={{ paddingRight: 4 }} /> :
                            <Icon_ size={20} color="red" name="unverified" style={{ paddingRight: 4 }} />}
                        <Text style={{ color: '#43A3E3', fontWeight: '700' }}>Phone No    {userProfileData.phoneVerified ?
                            <Text style={{ color: 'green' }}>Verified</Text> :
                            <Text style={{ color: 'red', borderWidth: 1 }}>Not Verified</Text>}</Text>
                    </View>
                    <Button style={{ width: '50%', alignSelf: 'center', marginBottom: 10 }} onPress={this.goToUploadVideo}>
                        <Text style={{ width: '100%', textAlign: 'center' }}>Upload Video</Text>
                    </Button>
                    <Button style={{ width: '50%', alignSelf: 'center' }} >
                        <Text style={{ width: '100%', textAlign: 'center' }}>Go TO Video List</Text>
                    </Button>
                </View>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        authData: state.authData
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//     };
// };
export default connect(
    mapStateToProps,
    null
)(Profile);
