

import LoginAction from '../actions/authActions'
const initialState = {
    isLoadng: false,
    isLogin: false,
    isJymOwner: false
};
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LoginAction.LOGIN_REQUEST:
            return {
                ...state,
                isLoadng: true
            };
        case LoginAction.LOGIN_SUCCESSFUL:
            return {
                ...state,
                isLoadng: false,
                isLogin: true,
                userData: action.data.data.data
            };
        case LoginAction.LOGIN_FAILED:
            return {
                ...state,
                errorMessage: {},
                isLoadng: false
            };
        default:
            return {
                ...state
            };
    }
};
export default LoginReducer;