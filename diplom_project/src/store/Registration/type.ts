export type UserReducerType = {
    name: string
    surname: string
}


export type UserActionType = {
    setUserName: 'SET_NAME'
    setSurName: 'SET_SURNAME'
}


export type setUserNameActionType = {
    type: UserActionType['setUserName']
    payload: string
}

export type setSurNameActionType = {
    type: UserActionType['setSurName']
    payload: string
}

export type ActionType = setUserNameActionType | setSurNameActionType;
