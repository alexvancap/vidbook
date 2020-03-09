import React from 'react'
import { Colors, IconButton } from 'react-native-paper'
import { Area } from '../'
import { Styles } from '../../Styles'
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
                onPress={() => history.push('/search')}
            />
        </Area>
    )
}