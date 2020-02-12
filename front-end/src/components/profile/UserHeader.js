import React from 'react'
import { Image, Platform } from 'react-native'
import { useSelector } from 'react-redux'
import { View } from '../'
import { Styles } from '../../Styles'

export const Header = () => {


    return(
        <View style={Platform.OS === 'web' ? Styles.profileHeaderContainerWeb : Styles.profileHeaderContainerMobile}>
            {
                userInfo.header_url
                ?   <Image source={{ uri: userInfo.header_url }} style={Platform.OS === 'web' ? Styles.picContainerWeb : Styles.picContainerMobile} />
                :   <View style={Platform.OS === 'web' ? Styles.picContainerWeb : Styles.picContainerMobile} />
            }
            {
                userInfo.profile_url
                ?   <Image source={{ uri: userInfoInfo.profile_url }} style={Platform.OS === 'web' ? Styles.profilePicContainerWeb : Styles.profilePicContainerMobile} />
                :   <View style={Platform.OS === 'web' ? Styles.profilePicContainerWeb : Styles.profilePicContainerMobile} />
            }
        </View>
    )
}