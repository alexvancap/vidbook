import React, { useEffect } from 'react'
import { StyleProvider } from './components'
import { Route, Router } from 'react-router'
import { Provider, useSelector } from 'react-redux'
import { Platform } from 'react-native'
import { store } from './Store'
import { MainPage } from './MainPage'
import { NavBar } from './components/NavBar/NavBar'
import { NavBarMobile } from './components/NavBar/NavBarMobile'
import { Login } from './Login/Login'
import { Register } from './Login/Register'
import history from './components/history'



const App = () => {

    useEffect(() => {
        fetch('http://localhost:3000/get-user', {
            credentials: 'include'
        }).then(res => res.json())
        .then(res => {
            console.log(res)
        })
    })

    return (
        <StyleProvider>
            <Router history={history}>
                {Platform.OS === 'web'
                    ? <NavBar /> 
                    : null}
                <Route exact path="/example" component={MainPage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
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