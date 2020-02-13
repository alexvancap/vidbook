import React, { useEffect, useState } from 'react'
import { Platform } from 'react-native'
import { IconButton } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { Area, Button, ScrollView, Text, View } from '../'
import { Styles } from '../../Styles'
import { HOST } from './../../constants'
import history from './../history'
import { EditInfoModal } from './EditInfoModal'
import { Header } from './Header'
import { VideoContainer } from './VideoContainer'


export const Profile = () => {

    const [modalIsVisible, showModal] = useState(false) 
    const userInfo = useSelector(state => state.user)
    const dispatch = useDispatch()

    console.log(userInfo)


    const handleShowModal = () => {
        showModal(false)
    }


    useEffect(() => {
        if (!userInfo.id){
            fetch(`http://${HOST}:3000/get-user`, {
                credentials: 'include'
            })
            .then( res => res.json())
            .then( user => {
                if(!user['error']){
                    dispatch({type: 'SAVE_USER_INFO', info: user})
                }else{
                    history.push('/login')
                }
            }).then(res => res.json())
            .then(console.log)
        }
    }, [])

    const deleteFile = (fileType) => {
        fetch(`http://${HOST}:3000/delete-file`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fileType: fileType
            })
        })
        .then(dispatch({type: 'DELETE-FILE', fileType: fileType}))
    }

    return(
        <ScrollView>
            <Area inline alignX="center">
                <View style={Platform.OS === 'web' ? Styles.profileContainerWeb : Styles.profileContainerMobile}>
                    <Header deleteFile={deleteFile}/>
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
                        <Button style={Styles.editInfoButton} color='white' onPress={() => showModal(true)} mode="outlined">Edit</Button>
                        <EditInfoModal showModal={handleShowModal} modalIsVisible={modalIsVisible}/>
                    </View>
                    <VideoContainer hideAddButton={true} user={userInfo.id} videoUrl={userInfo.video_url}/>
                </View>
            </Area>
        </ScrollView>
    )
}