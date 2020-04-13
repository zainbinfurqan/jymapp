import React, { Component } from 'react';
import { Text, View, Input, Item, Button, } from 'native-base'
import { loginFN } from '../../redux/middleware/authMiddleware'
import { connect } from "react-redux";
import LoginMiddleware from '../../redux/middleware/authMiddleware'
import { ActivityIndicator } from 'react-native'
import { Loading } from '../../component/loading'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Email_Phone: '',
            Password: ''
        }
    }

    chnageText = (e, key) => {
        this.setState({ [key]: e })
    }

    loginFN = () => {
        let data = {
            email: this.state.Email_Phone,
            password: this.state.Password
        }
        this.props.login(data)
        // await loginFN(data)
        // await this.props.onChangeState()
    }

    render() {
        if (this.props.authData.isLoadng) {
            return <Loading flag={this.props.authData.isLoadng} />
        }
        else {
            return (
                <>
                    <View style={{ flex: 1, padding: 10, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', fontSize: 30, fontFamily: 'sans-serif-condensed', fontWeight: '700' }}>Login</Text>
                        <View style={{}}>
                            <Item regular style={{ margin: 5 }}>
                                <Input placeholder='Email/Phone' onChangeText={(e) => this.chnageText(e, "Email_Phone")} />
                            </Item>
                            <Item regular style={{ margin: 5 }}>
                                <Input placeholder='Password' onChangeText={(e) => this.chnageText(e, "Password")} />
                            </Item>
                            <Button success style={{ alignContent: 'center' }} onPress={this.loginFN}>
                                <Text style={{ textAlign: 'center', width: '100%' }}>Success</Text>
                            </Button>
                        </View>
                    </View>
                </>
            )
        }

    }
}
const mapStateToProps = state => {
    return {
        authData: state.authData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => { return dispatch(LoginMiddleware.loginFN(data)); }
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
