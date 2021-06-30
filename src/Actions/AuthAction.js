import {AUTH} from "../Constants/AuthConstants";
import {usersAPI} from "../API/usersAPI";
const storageName = 'token'
export const logout = () => (dispatch) => {
    localStorage.removeItem('token')
    dispatch({type: AUTH.IS_AUTHENTICATED, isAuthenticated: false})
}
export const setToken = (jwtToken) => {
    localStorage.setItem(storageName, JSON.stringify(jwtToken))
}
export function login(nickname, password) {
    return async (dispatch) => {
        dispatch({type: AUTH.FETCHING, fetching: true})
        try {
            const login = await usersAPI.login(nickname, password)
            if (login) {
                dispatch({type: AUTH.FETCHING, fetching: false})
                dispatch({type: AUTH.IS_AUTHENTICATED, isAuthenticated: true})
                setToken(login.data.token)
            }
        } catch (err) {
            dispatch({type: AUTH.FETCHING, fetching: false})
            dispatch({type: AUTH.REJECTED, rejected: err.response.data.error})
        }
    }
}
export function signUp(email, nickname, password) {
    return async (dispatch) => {
        dispatch({type: AUTH.FETCHING, fetching: true})
        try {
            const signUp = await usersAPI.signup(email, nickname, password)
            if (signUp) {
                dispatch({type: AUTH.FETCHING, fetching: false})
                dispatch({type: AUTH.REJECTED, rejected: signUp.data.message})
            }
        }
        catch(err) {
            dispatch({type: AUTH.FETCHING, fetching: false})
            dispatch({type: AUTH.REJECTED, rejected: err.response.data.error})
        }
    }
}

