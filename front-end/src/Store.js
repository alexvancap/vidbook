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
            return{
                ...currentState,
                user: {
                    ...currentState.user,
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
                user: {
                    ...currentState.user,
                    ...action.info
                }
            }
        case 'UPLOAD_IMAGE': 
            return {
                ...currentState,
                user: {
                    ...currentState.user,
                    [action.imageType]: action.image
                }
            }
        case 'HANDLE_PROFILE_CHANGE':
            return {
                ...currentState,
                user: {
                    ...currentState.user,
                    [action.stateName]: action.input
                }
            }
        case 'UPLOAD_VIDEO':
            return {
                ...currentState,
                user: {
                    ...currentState.user,
                    video_url: action.video
                }
            }
        case 'HANDLE_REGISTER_CHANGE':
            return {
                ...currentState,
                register: {
                    ...currentState.register,
                    [action.stateName]: action.input
                }
            }
        case 'STORE_ALL_USERS':
            return{
                ...currentState,
                users: action.users
            }
        case 'ADD_COMMENT':
            const focus_user = currentState.users.filter(user=>user.id === action.userId)[0]
            return {
                ...currentState,
                users: [
                    ...currentState.users.filter(user=>user.id !== action.userId),
                    {...focus_user, video_comments: [
                        ...focus_user.video_comments, {
                            comment: action.content, 
                            user_id: action.userId,
                            user_that_commented_id: action.userThatCommentedId
                        }
                    ]}
                ]
            }
        case 'UPDATE_SEARCH_INPUT': 
            return{
                ...currentState,
                search: {
                    ...currentState.search,
                    input: action.input
                }
            }
        case 'UPDATE_SEARCH_FILTER': 
            return{
                ...currentState,
                search: {
                    ...currentState.search,
                    filter: action.filter
                }
            }
        case 'ADD_FILTERED_USERS':
            return{
                ...currentState,
                search: {
                    ...currentState.search,
                    searchedUsers: action.users
                }
            }
        case 'SAVE_VIEWING_USER':
            return{
                ...currentState,
                viewingUser: action.info
            }
        case 'DELETE-FILE':
            let itemToRemove = ''
            if(action.fileType === 'profile_pic'){
                itemToRemove = 'profile_url'
            }else if(action.fileType === 'header_pic'){
                itemToRemove = 'header_url'
            }else{
                itemToRemove = 'video_url'
            }
            return{
                ...currentState,
                user: {
                    ...currentState.user,
                    [itemToRemove]: ''
                }
            }
        break ;
    }
    return currentState
}

const initialState = {
    users: [],
    user: {
        id: null,
        username: null,
        first_name: '',
        last_name: '',
        adress: '',
        email: '',
        introduction: '',
        school: '',
        skills: '',
        current_role: '',
        degree: '',
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
        repeatedPasswordError: ''
    },
    navBar: {
        clicked: null
    },
    editProfile: {
        introduction: '',
        current_role: '',
        degree: '',
        skills: '',
        school: ''
    },
    search: {
        input: '',
        filter: 'name',
        searchedUsers: []
    },
    viewingUser: {
        id: null,
        username: null,
        first_name: '',
        last_name: '',
        adress: '',
        email: '',
        introduction: '',
        school: '',
        skills: '',
        current_role: '',
        degree: '',
        images: {
            header: null,
            profile: null
        },
    }
}

export const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)