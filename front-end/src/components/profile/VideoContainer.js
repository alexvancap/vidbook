import React, {useEffect} from 'react'
import { IconButton } from 'react-native-paper'
import { View } from '../'
import { Styles } from './../../Styles'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { HOST } from './../../constants'
import { useDispatch, useSelector } from 'react-redux';
import { Audio, Video } from 'expo-av';
import { Image } from 'react-native'


export const VideoContainer = (props) => {

    const dispatch = useDispatch()
    const videoUrl = useSelector(state => state.user.video_url)
    console.log(videoUrl)



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

    const pickMovie = async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Videos,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
                base64: true
            });
    
            if (!result.cancelled) {
                
                fetch(`http://${HOST}:3000/upload-video/${props.user}`, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        video: result.uri
                    })
                })
                .then(res => res.json())
                .then(dispatch({type: 'UPLOAD_VIDEO', video: result.uri}))
            }
        };

    return (
        <View>
            <View style={Styles.profileVideoContainer}>
                <IconButton 
                    size={40}
                    style={Styles.addVideoButton} 
                    icon="video-plus" 
                    color="white"
                    animated='true'
                    onPress={() => pickMovie()}
                />
            </View>
            <Video
                source={{ uri: videoUrl }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ width: 300, height: '100%' }}
            />
        </View>
    )
}