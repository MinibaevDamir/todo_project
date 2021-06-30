import {AUTH} from "../Constants/AuthConstants";

let initialState = {
    fetching: false,
    rejected: null,
    isAuthenticated: !!localStorage.getItem('token')
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH.FETCHING:
            return {
                ...state,
                fetching: action.fetching
            }
        case AUTH.REJECTED:
            return {
                ...state,
                rejected: action.rejected
            }
        case AUTH.IS_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: action.isAuthenticated
            }
        default:
            return state;
    }

}
