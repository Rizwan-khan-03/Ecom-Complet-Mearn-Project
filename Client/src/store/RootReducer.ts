import { combineReducers } from 'redux'
import testReducer from './TestReducer'
import { authenticationReducer } from './Auth/AuthReducer'


export const rootReducer = combineReducers({
    authentication: authenticationReducer,
    // Add other reducers here if needed
  });