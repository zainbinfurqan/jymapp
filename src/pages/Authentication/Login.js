import React, { Component } from 'react';
import { Text, View, Input, Item, Button, } from 'native-base'
import { loginFN } from '../../redux/middleware/authMiddleware'
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            Email_Phone: '',
            Password: ''
        }
    }

    chnageText = (e, key) => {
        this.setState({ [key]: e })
    }

    loginFN = async () => {
        let data = {
            email_phone: this.state.Email_Phone,
            password: this.state.Password
        }
        await loginFN(data)
        await this.props.onChangeState()
    }

    render() {
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