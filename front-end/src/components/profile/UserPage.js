import React, { useEffect, useState } from 'react'
import { Platform, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Area, Button, ScrollView, Text, View } from '../'
import { Styles } from '../../Styles'
import { HOST } from './../../constants'
import history from './../history'
import { UserHeader } from './UserHeader'
import { VideoContainer } from './VideoContainer'



export const UserPage = (props) => {

    const userInfo = useSelector(state => state.viewingUser)
    const dispatch = useDispatch()

    useEffect(() => {
            fetch(`http://${HOST}:3000/get-specific-user/${props.match.params.id}`, {
                credentials: 'include',
            })
            .then( res => res.json())
            .then( user => {
                if(!user['error']){
                    dispatch({type: 'SAVE_VIEWING_USER', info: user})
                    console.log(user)
                }
            })
    }, [])

    return(
        <ScrollView>
            <Area inline alignX="center">
                <View style={Platform.OS === 'web' ? Styles.profileContainerWeb : Styles.profileContainerMobile}>

                        <View style={Platform.OS === 'web' ? Styles.profileHeaderContainerWeb : Styles.profileHeaderContainerMobile}>
                            {
                                userInfo.header_url
                                ?   <Image source={{ uri: userInfo.header_url }} style={Platform.OS === 'web' ? Styles.picContainerWeb : Styles.picContainerMobile} />
                                :   <View style={Platform.OS === 'web' ? Styles.picContainerWeb : Styles.picContainerMobile} />
                            }
                            {
                                userInfo.profile_url
                                ?   <Image source={{ uri: userInfo.profile_url }} style={Platform.OS === 'web' ? Styles.profilePicContainerWeb : Styles.profilePicContainerMobile} />
                                :   <View style={Platform.OS === 'web' ? Styles.profilePicContainerWeb : Styles.profilePicContainerMobile} />
                            }
                        </View>


                    <View style={Platform.OS === 'web' ? Styles.profileInfo : Styles.profileInfoMobile}>
                        <Text style={Styles.profileInfoHeader}>Info</Text>
                        <Text style={Styles.profileInfoTextTitle}>Introduction</Text>
                        <Text style={Platform.OS === 'web' ? Styles. profileInfoTextBlock : Styles. profileInfoTextBlockMobile}>
                            {userInfo.introduction}
                        </Text>

                        <View style={{flexDirection: 'row'}}>
                            <View>
                                <Text style={Styles.profileInfoTextTitle}>Current role</Text>
                                <Text style={Styles.profileInfoText}>{userInfo.current_role}</Text>

                                <Text style={Styles.profileInfoTextTitle}>degree</Text>
                                <Text style={Styles.profileInfoText}>{userInfo.degree}</Text>

                                <Text style={Styles.profileInfoTextTitle}>school</Text>
                                <Text style={Styles.profileInfoText}>{userInfo.school}</Text>
                            </View>
                            <View style={Platform.OS === 'web' ? {marginLeft: '35%', maxWidth: '80%'} : {marginLeft: '18%', maxWidth: '50%'}}>

                                <Text style={Styles.profileInfoTextTitle}>skills</Text>
                                <Text style={Styles.profileInfoText}>{userInfo.skills}</Text>
                            </View>
                        </View>
                    </View>
                    {
                        
                    }
                    <VideoContainer user={userInfo.id} videoUrl={userInfo.video_url}/>
                </View>
            </Area>
        </ScrollView>
    )
}