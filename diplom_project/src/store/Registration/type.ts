/* eslint-disable max-len */
export type UserReducerType = {
    name: string
    surname: string
    email: string
}


export type UserActionType = {
    setUserName: 'SET_NAME'
    setSurName: 'SET_SURNAME'
    setEmail: 'SET_EMAIL'
    clearUser: 'CLEAR_USER'
}


export type setUserNameActionType = {
    type: UserActionType['setUserName']
    payload: string
}

export type setSurNameActionType = {
    type: UserActionType['setSurName']
    payload: string
}

export type setEmailActionType = { 
    type:UserActionType['setEmail']
    payload: string
}

export type clearUserActionType = {
    type: UserActionType['clearUser']
}

export type ActionType = setUserNameActionType | setSurNameActionType | setEmailActionType | clearUserActionType;
