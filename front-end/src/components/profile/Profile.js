import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import history from './../history'
import { Area, View, Avatar, Text, Button } from '../'
import { HOST } from '../../constants'
import { Styles } from '../../Styles'
import { Platform } from 'react-native'
import { IconButton } from 'react-native-paper'
// import { ImagePicker } from './../../ImagePicker'

export const Profile = () => {
    const dispatch = useDispatch()
    const userInfo = useSelector(state => state.user)
    console.log('I ran')

    useEffect(() => {
        if(userInfo.id === null){
            console.log('inside')
            fetch(`http://${HOST}:3000/get-user`, {
                credentials: 'include'
            }).then(res => res.json())
            .then(res => {
                console.log(res)
                if (res){
                    dispatch({type: 'SAVE_USER_INFO', info: res})
                }
            })
        }
    }, [])


    return(
        <Area inline alignX="center">
            <View style={Platform.OS === 'web' ? Styles.containerWeb : Styles.containerMobile}>
                <View style={Platform.OS === 'web' ? Styles.picContainerWeb : Styles.picContainerMobile}>
                <IconButton size={30}
                    style={Styles.addHeaderImgButton} 
                    icon="camera-image" 
                    color="white"
                    animated='true'
                    onPress={() => {console.log('hi')}}
                >
                </IconButton>
                    <View style={Platform.OS === 'web' ? Styles.profilePicContainerWeb : Styles.profilePicContainerMobile}>
                        <IconButton size={30} 
                            style={Styles.addProfileImgButton} 
                            icon="camera-account" 
                            color="white"
                            animated='true'
                            onPress={() => console.log('clicked')}
                        />
                    </View>
                </View>
            </View>
        </Area>
    )
    

}