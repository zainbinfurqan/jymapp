import React, { } from 'react'

import { View, Image, Text } from 'react-native';


function Render_1(arr) {
    return <View style={{ borderWidth: 1, borderColor: 'white', height: 200, }}>
        <Image resizeMode={"cover"} style={{ height: '100%' }} source={{ uri: arr[0] }} />
    </View>
}
function Render_2(arr) {
    return (
        <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'white', height: 200, }}>
            {arr.map(itm => {
                return (
                    < Image resizeMode={"cover"} style={{ borderWidth: 1, borderColor: 'white', flex: 0.5, height: '100%', width: '50%', }} source={{ uri: itm }} />
                )
            })}
        </View>
    )
}
function Render_3(arr) {
    return (
        <>
            < Image resizeMode={"cover"} style={{ borderWidth: 1, borderColor: 'white', minHeight: 300 }} source={{ uri: arr[0] }} />
            <View style={{ flexDirection: 'row', height: 150, }}>
                {arr.slice(1, 3).map(itm => {
                    return (
                        < Image resizeMode={"cover"} style={{ borderWidth: 1, borderColor: 'white', flex: 0.5, height: '100%', width: '50%', }} source={{ uri: itm }} />
                    )
                })}
            </View>

        </>
    )
}
function Render_4(arr) {
    return (
        <>
            <Image resizeMode={"cover"} style={{ borderWidth: 1, borderColor: 'white', minHeight: 300 }} source={{ uri: arr[0] }} />
            <View style={{ flexDirection: 'row', height: 150, }}>
                {arr.slice(1, 4).map(itm => {
                    return (
                        < Image resizeMode={"cover"} style={{ borderWidth: 1, borderColor: 'white', flex: 0.5, height: '100%', width: '50%', }} source={{ uri: itm }} />
                    )
                })}
            </View>
        </>
    )
}
function Render_5(arr) {
    let arr2;
    if (arr.length > 5) {
        arr2 = arr.slice(5)
        console.log(arr2, "arr2")
    }

    return (
        <>
            <View style={{ flexDirection: 'row' }}>
                <Image resizeMode={"cover"} style={{ borderWidth: 1, borderColor: 'white', minHeight: 300, flex: 0.5 }} source={{ uri: arr[0] }} />
                <Image resizeMode={"cover"} style={{ borderWidth: 1, borderColor: 'white', minHeight: 300, flex: 0.5 }} source={{ uri: arr[1] }} />
            </View>
            <View style={{ flexDirection: 'row', height: 150, width: '100%', }}>
                {arr.slice(2, 4).map((itm, index) => {
                    console.log(index)
                    return (
                        <>
                            <Image style={[{ borderWidth: 1, borderColor: 'white', flex: .34, height: '100%', },]}
                                source={{ uri: itm }} />
                        </>)
                })}

                <View style={{ height: 150, flex: .33 }}>
                    <Image style={{ height: '100%' }} source={{ uri: arr[4] }} />
                    {arr.length > 5 && <View style={{ height: 150, justifyContent: "center", width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4);', position: 'absolute' }}>
                        <Text style={{ color: 'white', fontSize: 35, alignSelf: 'center' }}>+ {arr2.length}</Text>
                    </View>}
                </View>
            </View>

        </>
    )
}

function ImageGallery(props) {
    return (
        <View style={{ flex: 1, }}>
            {props.Images && props.Images.length == 1 && Render_1(props.Images)}
            {props.Images && props.Images.length == 2 && Render_2(props.Images)}
            {props.Images && props.Images.length == 3 && Render_3(props.Images)}
            {props.Images && props.Images.length == 4 && Render_4(props.Images)}
            {props.Images && props.Images.length >= 5 && Render_5(props.Images)}

        </View>
    )
}

export default ImageGallery