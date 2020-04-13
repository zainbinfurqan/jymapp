

import GymAction from '../actions/gymAction'


const initialState = {
    isLoadng: false,
    list: []
};


const GymReducer = (state = initialState, action) => {
    switch (action.type) {
        case GymAction.GYM_LIST_REQUEST:
            return {
                ...state,
                isLoadng: true
            };
        case GymAction.GYM_LIST_SUCCESSFUL:
            return {
                ...state,
                isLoadng: false,
                list: action.data.data
            };
        case GymAction.GYM_LIST_FAILED:
            return {
                ...state,
                errorMessage: {},
                isLoadng: false
            };

        //upload video
        case GymAction.GYM_VIDEO_UPLOAD_REQUEST:
            return {
                ...state,
                isLoadng: true
            };
        case GymAction.GYM_VIDEO_UPLOAD_SUCCESSFUL:
            return {
                ...state,
                isLoadng: false,
            };
        case GymAction.GYM_VIDEO_UPLOAD_FAILED:
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

export default GymReducer;