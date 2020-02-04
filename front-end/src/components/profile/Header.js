import React, {useEffect} from 'react'
import { Area, View, Avatar, Text, Button } from '../'
import { useDispatch, useSelector } from 'react-redux'
import { Styles } from '../../Styles'
import { Platform } from 'react-native'
import { IconButton } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Image } from 'react-native'
import { HOST } from '../../constants'

export const Header = () => {
    const images = useSelector(state => state.user.images)
    const dispatch = useDispatch()
    const userId = useSelector(state => state.user.id)
    

    useEffect(() => {
        getPermissionAsync();
    }, [])

    const getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        }

    const pickImage = async (imageToAdd) => {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1
            });
    
            if (!result.cancelled) {
                fetch(`http://${HOST}:3000/upload-img/${userId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        img: result.uri,
                        imageToChange: imageToAdd
                    })
                })
                .then(res => dispatch({type: 'UPLOAD_IMAGE', image: res.url, imageType: imageToAdd}))
            }
        };


    return(
        <View style={Platform.OS === 'web' ? Styles.profileHeaderContainerWeb : Styles.profileHeaderContainerMobile}>
            {
                images.header
                ?   <Image source={{ uri: images.header }} style={Platform.OS === 'web' ? Styles.picContainerWeb : Styles.picContainerMobile} />
                :   <View style={Platform.OS === 'web' ? Styles.picContainerWeb : Styles.picContainerMobile}>
                        <IconButton size={30}
                            style={Styles.addHeaderImgButton} 
                            icon="camera-image" 
                            color="white"
                            animated='true'
                            onPress={() =>{
                                pickImage('header')
                            }}
                        />
                    </View>
            }
            {
                images.profile
                ?   <Image source={{ uri: images.profile }} style={Platform.OS === 'web' ? Styles.profilePicContainerWeb : Styles.profilePicContainerMobile} />
                :   <View style={Platform.OS === 'web' ? Styles.profilePicContainerWeb : Styles.profilePicContainerMobile}>
                    <IconButton size={30} 
                        style={Styles.addProfileImgButton} 
                        icon="camera-account" 
                        color="white"
                        animated='true'
                        onPress={() => {
                            pickImage('profile')
                        }}
                    />
                </View>
            }
        </View>
    )
}