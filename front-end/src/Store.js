import { createStore } from 'redux'

const reducer = (currentState, action) => {
    switch (action.type){
        case 'HANDLE_NAV_CLICK':
            return {
                ...currentState,
                navBar: {
                    clicked: action.clickedItem
                }
            }
        case 'HANDLE_USER_LOGIN':
            return {
                ...currentState,
                user: action.user
            }
        case 'HANDLE_LOGIN_USERNAME':
            return{
                ...currentState,
                login: {
                    ...currentState.login,
                    username: action.input
                }
            }
        case 'HANDLE_LOGIN_PASSWORD':
            return{
                ...currentState,
                login: {
                    ...currentState.login,
                    password: action.input
                }
            }
        case 'HANDLE_REGISTER':
            return{
                ...currentState,
                register:{
                    ...currentState.register,
                    [action.stateName]: action.input
                }
            }
        case 'SAVE_USER_ID':
            console.log(action.id)
            return{
                ...currentState,
                user: {
                    id: action.id
                }
            }
        case 'PASSWORDS_DID_NOT_MATCH':
            return{
                ...currentState,
                register: {
                    ...currentState.register,
                    password: '',
                    repeatedPassword: '',
                    repeatedPasswordError: 'true'
                }
            }
        case 'SAVE_USER_INFO':
            return{
                ...currentState,
                user: action.info
            }
        break ;
    }
    return currentState
}

const initialState = {
    user: {
        id: null,
        username: null,
        firstName: '',
        lastName: '',
        adress: '',
        email: ''
    },
    login: {
        username: '',
        password: ''
    },
    register: {
        username: '',
        firstName: '',
        lastName: '',
        adress: '',
        email: '',
        password: '',
        repeatedPassword: '',
        repeatedPasswordError: false
    },
    navBar: {
        clicked: null
    }
}

export const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)