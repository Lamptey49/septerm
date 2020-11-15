import loggedReducer from './isLogged'
import counter from './counter'
import {combineReducers} from 'redux'

export const allReducers = combineReducers({
    loggedReducer,
    counter
});

