import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import React, { useEffect } from 'react';
import { IconButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { View } from '../';
import { HOST } from './../../constants';
import { Styles } from './../../Styles';
import { VideoComponent } from '../VideoComponent'


export const VideoContainer = (props) => {

    const dispatch = useDispatch()
    const videoUrl = useSelector(state => state.user.video_url)

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
                // base64: true
            });

            if (!result.cancelled) {
                // ImagePicker saves the taken photo to disk and returns a local URI to it
                let localUri = result.uri;
                let filename = localUri.split('/').pop();

                // Infer the type of the image
                let match = /\.(\w+)$/.exec(filename);
                let type = match ? `image/${match[1]}` : `image`;

                // Upload the image using the fetch and FormData APIs
                let formData = new FormData();
                // Assume "photo" is the name of the form field the server expects
                formData.append('video', { uri: localUri, name: filename, type });
                
                fetch(`http://${HOST}:3000/upload-video/${props.user}`, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formData
                })
                .then(res => res.json())
                .then(dispatch({type: 'UPLOAD_VIDEO', video: result.uri}))
            }
        };


        if(!videoUrl){
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
                </View>
                   
            )
        }else{
            return(
                <View>
                    <View style={Styles.profileVideoContainer}>
                        <VideoComponent videoUrl={videoUrl}/>
                    </View>
                </View>
            )
        }

    
}