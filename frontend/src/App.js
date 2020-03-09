import React, {useEffect} from 'react'
import { StyleProvider, View } from './components'
import { Route, Router } from 'react-router'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { Platform, ScrollView, SafeAreaView, YellowBox } from 'react-native'
import { store } from './Store'
import { MainPage } from './MainPage'
import { NavBar } from './components/NavBar/NavBar'
import { NavBarMobile } from './components/NavBar/NavBarMobile'
import { Login } from './Login/Login'
import { Register } from './Login/Register'
import history from './components/history'
import { Profile } from './components/profile/Profile'
import { Home } from './components/home/Home'
import { AppBar } from './components/AppBar'
import { Settings } from './components/settings/Settings'
import { Search } from './components/search/Search'
import { UserPage } from './components/profile/UserPage'

const App = () => {
    console.disableYellowBox = true;

    return (
        <StyleProvider>
            <Router history={history}>
                    {Platform.OS === 'web'
                        ? <NavBar /> 
                        : <AppBar /> }
                        <Route exact path='/' component={Home} />
                        <Route path="/example" component={MainPage} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/search" component={Search} />
                        <Route path="/user/:id" component={UserPage} />
                        {/* <View style={{height: 80}}></View> */}
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