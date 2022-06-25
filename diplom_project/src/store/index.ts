import UserReducer from './Registration/reducer';
import { combineReducers } from '@reduxjs/toolkit';


const rootReducers = combineReducers({
    user: UserReducer,
})

export default rootReducers;

