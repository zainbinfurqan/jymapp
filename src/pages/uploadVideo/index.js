import React, { Component } from 'react';
import { connect } from "react-redux";
import { Loading } from '../../component/loading'
import { View, Item, Input, Switch, Button, Text } from 'native-base';
import gymMiddleware from '../../redux/middleware/gymMiddleware';
import axios from 'axios'
import { Platform } from 'react-native'
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob'
const options = {
    title: 'Video Picker',
    mediaType: 'video',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

const createFormData = (photo, body) => {
    const data = new FormData();

    console.log(photo)
    data.append("photo", {
        name: photo.fileName,
        type: photo.type,
        uri:
            Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    });

    Object.keys(body).forEach(key => {
        data.append(key, body[key]);
    });
    console.log(data._parts, "data")

    return data;
};


class UploadVideoForm extends Component {
    constructor() {
        super()
        this.state = {
            videoData: '',
            videoTitle: '',
            videoDiscription: ''
        }
    }

    handleChoosePhoto = () => {
        const options = {
            noData: true,
        }
        ImagePicker.showImagePicker(options, response => {
            //response will give you two main params , uri and path ,
            if (response.uri) {
                console.log(response)
                this.setState({ videoData: response })
            }
        })
    }

    changeText = (e, key) => {
        this.setState({ [key]: e })
    }


    uploadVideo = async () => {
        console.log("up")
        let { videoTitle, videoDiscription, videoData } = this.state;
        this.handleUploadPhoto(videoData)
    }


    handleUploadPhoto = (data) => {
        console.log(data)

        RNFetchBlob.fetch('POST', 'http://192.168.0.5:3000/api/carrier/uploaddoc', {
            'Content-Type': 'multipart/form-data',
        }, [
            //--------1 line------//
            { name: 'doc', filename: data.fileName, type: data.type, data: RNFetchBlob.wrap(data.path) },
            //--------2 line------//
            {
                name: 'info', data: JSON.stringify({
                    folder: 'xbx',
                    type: 'xbx',
                    docName: 'xbx',
                    userId: '5e819dbac2a5dd13247a3f38',
                })
            },

        ]).then((resp) => {
            console.log(resp)
            // ...
        }).catch((err) => {
            // ...
            console.log(err)
        })

    };

    render() {
        console.log(this.props.gyms)
        console.log(this.props.authData)
        return (
            <>
                <View>
                    <Item regular>
                        <Input placeholder='Video Title' onChangeText={(e) => this.changeText(e, "videoTitle")} />
                    </Item>
                    <Item regular>
                        <Input placeholder='Video Discription' onChangeText={(e) => this.changeText(e, "videoDiscription ")} />
                    </Item>
                    <Switch value={false} />
                    <Button onPress={this.handleChoosePhoto}>
                        <Text>Select Video</Text>
                    </Button>
                    <Button onPress={this.uploadVideo}>
                        <Text>Submit</Text>
                    </Button>
                </View>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        gyms: state.gymList,
        authData: state.authData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postVideo: (data) => { return dispatch(gymMiddleware.postVideo(data)); }
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UploadVideoForm);
