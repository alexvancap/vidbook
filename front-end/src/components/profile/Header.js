import Constants from 'expo-constants'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import React, { useEffect } from 'react'
import { Image, Platform } from 'react-native'
import { IconButton } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { View } from '../'
import { HOST } from '../../constants'
import { Styles } from '../../Styles'

export const Header = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    console.log(user.header_url)
    

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
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
                base64: true,
                exif: true
            });

            dispatch({type: 'UPLOAD_IMAGE', image: result.uri, imageType: imageToAdd})

            if (!result.cancelled) {
                fetch(`http://${HOST}:3000/upload-img/${user.id}`, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        img: result.base64,
                        type: imageToAdd
                    })
                })
            }
        };


    return(
        <View style={Platform.OS === 'web' ? Styles.profileHeaderContainerWeb : Styles.profileHeaderContainerMobile}>
            {
                user.header_url && user.header_url !== ""
                ?   <Image source={{ uri: user.header_url }} style={Platform.OS === 'web' ? Styles.picContainerWeb : Styles.picContainerMobile} />
                :   <View style={Platform.OS === 'web' ? Styles.picContainerWeb : Styles.picContainerMobile}>
                        <IconButton size={30}
                            style={Styles.addHeaderImgButton} 
                            icon="camera-image" 
                            color="white"
                            animated='true'
                            onPress={() =>pickImage('header_url')}
                        />
                    </View>
            }
            {
                user.profile_url && user.profile_url !== ""
                ?   <Image source={{ uri: user.profile_url }} style={Platform.OS === 'web' ? Styles.profilePicContainerWeb : Styles.profilePicContainerMobile} />
                :   <View style={Platform.OS === 'web' ? Styles.profilePicContainerWeb : Styles.profilePicContainerMobile}>
                    <IconButton size={30} 
                        style={Styles.addProfileImgButton} 
                        icon="camera-account" 
                        color="white"
                        animated='true'
                        onPress={() => pickImage('profile_url')}
                    />
                </View>
            }
        </View>
    )
}