import React, { useState } from 'react';
import { View } from '.';
import { IconButton } from 'react-native-paper'
import { Video } from 'expo-av';

export const VideoComponent = (props) => {

    const [videoIsPlaying, playVideo] = useState(false)     

    const onPlaybackStatusUpdate = playbackStatus => {
        if (playbackStatus.didJustFinish){
            video.playFromPositionAsync(0)
            playVideo(false)
        }
      };

    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Video
                ref={ref => video = ref}
                onPlaybackStatusUpdate=
                    {(playbackStatus) => onPlaybackStatusUpdate(playbackStatus)}
                source={props.videoUrl!== '' ? { uri: props.videoUrl } : null}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="stretch"
                shouldPlay={videoIsPlaying}
                style={{ width: 300, height: '100%', zIndex: 0 }}
            />
            {!videoIsPlaying
                ?   <IconButton 
                        style={{position: 'absolute', zIndex: 1}}
                        icon='play-circle'
                        color='white'
                        size={70}
                        onPress={() => playVideo(true)}
                    />
                :   null
            }
        </View>
    )
}