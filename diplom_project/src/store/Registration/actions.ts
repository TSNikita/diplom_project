import { UserActionType } from './type';

export const UserAction: UserActionType = {
    setUserName: 'SET_NAME',
    setSurName: 'SET_SURNAME',
    setEmail: 'SET_EMAIL',
    clearUser: 'CLEAR_USER'
}

export const setUserNameAction = (name: string) => ({
    type: UserAction.setUserName,
    payload: name
})

export const setSurNameAction = (surname: string) => ({
    type: UserAction.setSurName,
    payload: surname
})


export const setEmailAction = (email: string) => ({
    type: UserAction.setEmail,
    payload: email
})

export const clearUserAction = () => ({
    type: UserAction.clearUser,
})

