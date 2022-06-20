import { combineReducers } from '@reduxjs/toolkit';
import UserReducer from './Registration/reducer';



const rootReducer = combineReducers({
    reg: UserReducer,
})

export default rootReducer;
