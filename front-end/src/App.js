import React, { useEffect } from 'react'
import { StyleProvider, View } from './components'
import { Route, Router } from 'react-router'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { Platform } from 'react-native'
import { store } from './Store'
import { MainPage } from './MainPage'
import { NavBar } from './components/NavBar/NavBar'
import { NavBarMobile } from './components/NavBar/NavBarMobile'
import { Login } from './Login/Login'
import { Register } from './Login/Register'
import history from './components/history'
import { Profile } from './components/profile/Profile'
import { Styles } from './Styles'



const App = () => {
    console.log('noooooooooo')

    return (
        <StyleProvider>
            <Router history={history}>
                {Platform.OS === 'web'
                    ? <NavBar /> 
                    : null}
                    <Route exact path="/example" component={MainPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/profile" component={Profile} />
                {Platform.OS === 'ios' || Platform.OS === 'android'
                    ? <NavBarMobile />
                    : null}
            </Router>
        </StyleProvider>
    )
    
}
export default () => (
    <Provider store ={store}>
        <App />
    </Provider>
)