import React from 'react'
import { View, Text } from 'react-native'
import { IconButton, Colors} from 'react-native-paper'
import { Button } from './../'
import { Styles } from '../../Styles'
import { Profile } from './../profile/Profile'
import { Area } from '../'
import history from '../history'

export const NavBarMobile = () => {
    return (
        <Area inline alignX="center" style={Styles.navBarContainerMobile}>
            <IconButton 
                icon="home"
                color={Colors.white}
                size={45}
                onPress={() => history.push('/')}
            />
            <IconButton 
                icon="account"
                color={Colors.white}
                size={45}
                onPress={() => history.push('/profile')}
            />
            <IconButton 
                icon="settings"
                color={Colors.white}
                size={45}
                onPress={() => history.push('/settings')}
            />
            <IconButton 
                icon="magnify"
                color={Colors.white}
                size={45}
                onPress={() => history.push('/login')}
            />
        </Area>
    )
}