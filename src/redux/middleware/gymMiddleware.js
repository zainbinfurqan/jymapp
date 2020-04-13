import { AsyncStorage } from 'react-native';
// import axios from '../../config/axiosConfig'
import GymAction from '../actions/gymAction'
import { GET_ALL_GYM_LIST, BASE_URL, UPLOAD_VIDEO } from '../../config/paths'
import axios from 'axios'

class gymMiddleware {
    static getGymList(data) {
        let url = GET_ALL_GYM_LIST;
        const options = {
            url,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        };
        return dispatch => {
            dispatch(GymAction.gymlistRequest());
            axios(options)
                // axios.post(url, data)
                .then(res => {
                    if (res.error) {
                    } else {
                        dispatch(
                            GymAction.gymlistSuccessfull(res)
                        );
                    }
                })
                .catch(error => {
                    dispatch(GymAction.gymlistFailed(error));
                });
        };
    }


    static postVideo(data) {
        console.log(data)
        let url = UPLOAD_VIDEO;
        const options = {
            url,
            method: 'POST',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
            data
        };
        return dispatch => {
            dispatch(GymAction.uploadVideoRequest());
            axios(options)
                // axios.post(url, data)
                .then(res => {
                    if (res.error) {
                    } else {
                        dispatch(
                            GymAction.uploadVideoSuccessfull(res)
                        );
                    }
                })
                .catch(error => {
                    dispatch(GymAction.uploadVideoFailed(error));
                });
        };
    }

}

export default gymMiddleware;
