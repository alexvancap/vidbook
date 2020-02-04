import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import history from './../history'
import { Area, View, Avatar, Text, Button } from '../'
import { Header } from './Header'
import { Styles } from '../../Styles'
import { HOST } from './../../constants'
import { Platform } from 'react-native'

export const Profile = () => {
    

    return(
        <Area inline alignX="center">
            <View style={Platform.OS === 'web' ? Styles.profileContainerWeb : Styles.profileContainerMobile}>
                <Header />
                <View style={Platform.OS === 'web' ? Styles.profileInfo : Styles.profileInfo}>
                    <Text style={Styles.profileInfoHeader}>Info</Text>
                    <Text style={Styles.profileInfoTextTitle}>Introduction</Text>
                    <Text style={Styles.profileInfoTextBlock}>introduction:</Text>
                    <Button style={Styles.editInfoButton}>Edit</Button>
                </View>
            </View>
        </Area>
    )
    

}