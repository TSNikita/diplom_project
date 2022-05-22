import { UserReducerType, ActionType } from './type';
import { UserAction } from './actions';

const initialState: UserReducerType = {
    name: '',
    surname: ''
};

const UserReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case UserAction.setUserName:
        return {
            ...state,
            name: action.payload
        };
        case UserAction.setSurName:
            return {
                ...state,
                surname: action.payload
            };
        default: 
        return state;
    }
}

export default UserReducer;
