import { UserActionType } from './type';

export const UserAction: UserActionType = {
    setUserName: 'SET_NAME',
    setSurName: 'SET_SURNAME'
}

export const setUserNameAction = (name: string) => ({
    type: UserAction.setUserName,
    payload: name
})

export const setSurNameAction = (surname: string) => ({
    type: UserAction.setSurName,
    payload: surname
})


