import React from 'react'
import {View, Text} from 'react-native'
import {Styles} from '../../Styles'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import history from '../history'
import { HOST } from '../../constants'

export const NavBar = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        fetch(`http://${HOST}:3000/logout`, { 
            credentials: 'include' 
        })
        .then(() => {
            history.push('/login')
            dispatch({type: 'SAVE_USER_ID', id: null})
        })
    }

    return (
        <View style={Styles.navBarContainer}>
            <Link 
                to={'/'} 
                style={{textDecoration: "none"}} >
                <Text 
                    style={Styles.logo}>
                    VidBook
                </Text>
            </Link>
            <Link 
                to={'/'} 
                style={{textDecoration: "none"}}>
                <Text 
                    style={Styles.navButton}>
                    Home
                </Text>
            </Link>
            <Link to={'/profile'} 
                style={{textDecoration: "none"}}>
                <Text 
                    style={Styles.navButton}>
                    Profile
                </Text>
            </Link>
            <Link 
                to={'/settings'} 
                style={{textDecoration: "none"}}>
                <Text 
                    style={Styles.navButton}>
                    Settings
                </Text>
            </Link>
            <View
                to={'#'}
                onClick={handleLogout}>
                <Text
                    style={Styles.logoutButton}>
                        Logout
                </Text>
            </View>
        </View>
    )
}



