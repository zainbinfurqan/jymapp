import React, { Component } from 'react';
import { Text, View, Input, Item, Button, Switch, Left } from 'native-base'
import { ScrollView, SafeAreaView } from 'react-native-gesture-handler';
import { connect } from "react-redux";

class SignUp extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <>
                {/* <View style={{}}> */}
                <ScrollView style={{ marginTop: 50 }}>
                    <View style={{ padding: 10, justifyContent: 'center', }}>
                        <Text style={{ textAlign: 'center', fontSize: 30, fontFamily: 'sans-serif-condensed', fontWeight: '700' }}>Registation</Text>
                        <Item regular style={{ margin: 5 }}>
                            <Input placeholder='Full Name' />
                        </Item>
                        <Item regular style={{ margin: 5 }}>
                            <Input placeholder='Email' />
                        </Item>
                        <Item regular style={{ margin: 5 }}>
                            <Input placeholder='Password' />
                        </Item>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 5 }}>
                            <Item regular style={{ width: '49%' }}>
                                <Input placeholder='Weight' />
                            </Item>
                            <Item regular style={{ width: '49%' }}>
                                <Input placeholder='Height' />
                            </Item>
                        </View>
                        <Item regular style={{ margin: 5 }}>
                            <Input placeholder='age' />
                        </Item>
                        <View style={{ alignItems: 'flex-start', margin: 5, flex: 1, flexDirection: 'row' }}>
                            <Text>As Jym Owner</Text>
                            <Switch value={true} style={{ marginTop: 0.2 }} />
                        </View>
                        <Button success style={{ alignContent: 'center' }}>
                            <Text style={{ textAlign: 'center', width: '100%' }}>Success</Text>
                        </Button>
                    </View>
                </ScrollView>
                {/*  */}
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
)(SignUp);
