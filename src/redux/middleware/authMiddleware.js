import { AsyncStorage } from 'react-native';
// import axios from '../../config/axiosConfig'
import loginAction from '../actions/authActions'
import { LOGIN, BASE_URL } from '../../config/paths'
import axios from 'axios'
export const loginFN = async (data) => {
    if (data.email_phone == '1' && data.password == '1') {
        try {
            await AsyncStorage.setItem('Islogin', JSON.stringify(true));
            await AsyncStorage.setItem('isJymOwner', JSON.stringify(true));
        } catch (error) {
        }
    }
}

export const registrationFN = async (data) => {

}



class LoginMiddleware {
    static loginFN(data) {
        let url = LOGIN;
        const options = {
            url,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                ...data
            }
        };
        return dispatch => {
            dispatch(loginAction.loginRequest());
            axios(options)
                // axios.post(url, data)
                .then(res => {
                    if (res.error) {
                        console.log(res.error)
                    } else {
                        dispatch(
                            loginAction.loginSuccessfull(res)
                        );
                    }
                })
                .catch(error => {
                    console.log(error)
                    dispatch(loginAction.loginFailed(error));
                });
        };
    }
}

export default LoginMiddleware;
