import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from "react-redux";



import JymList from './pages/JymList'
import SingleJymVideos from './pages/SingleJymVideos'
import AboutUs from './pages/Components/aboutus'
import Login from './pages/Authentication/Login'
import SignUp from './pages/Authentication/SignUp'
import Profile from './pages/profile'
import UploadVideoForm from './pages/uploadVideo'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MainDashBoard = () => (
    <Stack.Navigator>
        <Stack.Screen name="JymList" component={JymList} />
        <Stack.Screen name="SignleJymVideos" component={SingleJymVideos} />
        <Stack.Screen name="UploadVideoForm" component={UploadVideoForm} />
    </Stack.Navigator>
)
const Profile_ = () => (
    <Stack.Navigator initialRouteName='Profile'>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="UploadVideoForm" component={UploadVideoForm} />
    </Stack.Navigator>
)

class EntryPoint extends Component {
    constructor() {
        super()
        this.state = {
            islogin: false,
            isJymOwner: false
        }
    }

    logout_ = () => {
        return (
            <View>
                <Text onPress={setIslogin(false)}></Text>
            </View>
        )
    }

    render() {
        return (
            <>
                {this.props.authData.isLogin ? <NavigationContainer>
                    <Drawer.Navigator initialRouteName="MainDashboard">
                        <Drawer.Screen name="MainDashboard" component={MainDashBoard} />
                        <Drawer.Screen name="Profile" component={Profile_} />
                        {this.props.authData.isJymOwner && <Drawer.Screen name="UserDashboard" component={UserDashboard} />}
                        <Drawer.Screen name="Logout" component={this.logout_} />

                    </Drawer.Navigator>
                </NavigationContainer> : <NavigationContainer>
                        <Drawer.Navigator initialRouteName="Login">
                            <Drawer.Screen name="Login" component={Login} />
                            <Drawer.Screen name="SignUp" component={SignUp} />
                        </Drawer.Navigator>
                    </NavigationContainer>}
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
)(EntryPoint);
