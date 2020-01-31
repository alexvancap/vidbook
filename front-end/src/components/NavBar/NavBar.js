import React from 'react'
import {View, Text} from 'react-native'
import {Styles} from '../../Styles'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import history from '../history'

export const NavBar = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        fetch('http://localhost:3000/logout')
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
                onClick={() => handleLogout()}>
                <Text
                    style={Styles.navButton}>
                        Logout
                </Text>
            </View>
        </View>
    )
}



