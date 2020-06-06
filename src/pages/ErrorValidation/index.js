import React, { useState, useEffect, useReducer } from 'react'
import { View, TextInput } from 'react-native'

const initialState = {
    firstName: '',
    lastName: '',
    email: ''
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
    const [state, dispatch] = useReducer(reducer, initialState)

    function handleTextChange(label, value) {
        dispatch({
            type: 'ON_CHANGE',
            payload: { [label]: value }
        })
    }

    return (
        <View style={{ flex: 1 }}>

            {console.log(state)}
            <TextInput style={{ height: 50, borderWidth: 1, margin: 10 }} onChangeText={(e) => handleTextChange('firstName', e)} />
            <TextInput style={{ height: 50, borderWidth: 1, margin: 10 }} onChangeText={(e) => handleTextChange('lastName', e)} />
            <TextInput style={{ height: 50, borderWidth: 1, margin: 10 }} onChangeText={(e) => handleTextChange('email', e)} />
        </View>
    )
}

export default ErrorValidation;