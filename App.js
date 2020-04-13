/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import MainDashboard from './src/pages/dashboards/maindashboard'
import MuscleZone from './src/pages/dashboards/jymdashboards/musclezone/Home'
import Shamsuddin from './src/pages/dashboards/jymdashboards/shamsuddin/Home'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AboutUs from './src/pages/Components/aboutus'
import Login from './src/pages/Authentication/Login'
import SignUp from './src/pages/Authentication/SignUp'
import JymList from './src/pages/JymList'
import SingleJymVideos from './src/pages/SingleJymVideos'
import UserDashboard from './src/pages/dashboards/jymdashboards/UserDashboad/index'
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { connect } from "react-redux";
import EntrPoint from './src'

import configureStore from './src/redux';

const store = configureStore()

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// const MainDashBoard = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="JymList" component={JymList} />
//     <Stack.Screen name="SignleJymVideos" component={SingleJymVideos} />
//   </Stack.Navigator>
// )

const App = () => {
  // const onChangeState = async () => {
  //   try {
  //     let islogin = await AsyncStorage.getItem('Islogin');
  //     let isJymOwner = await AsyncStorage.getItem('isJymOwner');
  //     var islogin_ = JSON.parse(islogin)
  //     var isJymOwner_ = JSON.parse(isJymOwner)
  //     if (islogin_ !== null) {
  //       console.log(islogin_, isJymOwner_)
  //       setIslogin(islogin_)
  //       setisJymOwner(isJymOwner_)
  //     }
  //   } catch (error) {
  //   }
  // }

  // const SignUp_ = () => {
  //   return (
  //     <SignUp />
  //   )
  // }

  // const Login_ = () => {
  //   return (
  //     <Login onChangeState={onChangeState} />
  //   )
  // }

  // const logout_ = () => {
  //   return (
  //     <View>
  //       <Text onPress={setIslogin(false)}></Text>
  //     </View>
  //   )
  // }

  // const [islogin, setIslogin] = useState(false)
  // const [isJymOwner, setisJymOwner] = useState(false)


  return (
    <>
      <Provider store={store}>
        <EntrPoint />
        {/* {console.log(islogin, isJymOwner)} */}
        {/* {islogin ? <NavigationContainer>
          <Drawer.Navigator initialRouteName="MainDashboard">
            <Drawer.Screen name="MainDashboard" component={MainDashBoard} />
            {isJymOwner && <Drawer.Screen name="UserDashboard" component={UserDashboard} />}
            <Drawer.Screen name="Logout" component={logout_} />

          </Drawer.Navigator>
        </NavigationContainer> : <NavigationContainer>
            <Drawer.Navigator initialRouteName="Login">
              <Drawer.Screen name="Login" component={Login} />
              <Drawer.Screen name="SignUp" component={SignUp} />
            </Drawer.Navigator>
          </NavigationContainer>} */}
      </Provider>
    </>
  );
};



export default App;
