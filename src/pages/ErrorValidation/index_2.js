import React, { useEffect, useState, useReducer } from 'react'
import { Input, Label } from 'native-base'
import { TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { connect } from 'react-redux';

const initialState = {
    firstaName: '',
    lastName: "",
    email: "",
    password: ''
}

function reducer(state, action) {
    switch (action.type) {
        case "ON_CHANGE":
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

function ErrorValidation() {

    function handleTextChange(label, value) {
        dispatch({
            type: 'ON_CHANGE',
            payload: {
                [label]: value
            }
        })
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ flex: 1 }}>
            {console.log(state)}
            <Label style={{ margin: 10 }}>First Name</Label>
            <TextInput
                value={state.firstName}
                style={{ height: 50, borderWidth: 1, margin: 10, }}
                onChangeText={(e) => handleTextChange('firstName', e)} />

            <Label style={{ margin: 10 }}>Last Name</Label>
            <TextInput
                value={state.lastName}
                style={{ height: 50, borderWidth: 1, margin: 10 }}
                onChangeText={(e) => handleTextChange('lastName', e)} />

            <Label style={{ margin: 10 }}>Email</Label>
            <TextInput
                value={state.email}
                style={{ height: 50, borderWidth: 1, margin: 10 }}
                onChangeText={(e) => handleTextChange('email', e)} />

            <Label style={{ margin: 10 }}>Password</Label>
            <TextInput
                value={state.password}
                style={{ height: 50, borderWidth: 1, margin: 10 }}
                onChangeText={(e) => handleTextChange('password', e)} />

        </KeyboardAvoidingView>
    )
}

export default connect(null, null)(ErrorValidation);
