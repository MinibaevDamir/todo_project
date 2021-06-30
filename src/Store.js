import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware from "redux-thunk"
import {todoReducer} from "./Reducers/TodoReducer"
import {authReducer} from "./Reducers/AuthReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
const composeEnhancers = composeWithDevTools({
});
let reducers = combineReducers({
    form: formReducer,
    todo: todoReducer,
    auth: authReducer
});
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.store = store;

export default store;