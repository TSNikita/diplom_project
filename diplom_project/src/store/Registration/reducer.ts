import { UserReducerType, ActionType } from './type';
import { UserAction } from './actions';

const initialState: UserReducerType = {
    name: '',
    surname: '',
    email: '',
    look: 0
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
            case UserAction.setEmail:
            return {
                ...state,
                email: action.payload
            };
            case UserAction.clearUser:
            return {
                ...initialState,
            };
            case UserAction.setLook:
                return {
                    ...state,
                    look: state.look + 1
                }

        default: 
        return state;
    }
}

export default UserReducer;
