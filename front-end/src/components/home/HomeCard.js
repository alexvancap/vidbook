import React, {useState, useEffect} from 'react'
import { View, Text, Button, Divider } from './../'
import { ScrollView, Platform, Image, TouchableHighlight } from 'react-native'
import { Styles } from './../../Styles'
import { useSelector } from 'react-redux'
import { HOST } from './../../constants'
import { CommentModal } from './CommentModal'
import history from './../history'
import { VideoComponent } from '../VideoComponent'

export const HomeCard = (props) => {



    const [isLiked, setIsLiked] = useState(false)
    const [amountOfLikes, setAmountOfLikes] = useState(props.user.video_likes.length)
    const [modalIsVisible, showModal] = useState(false)
    
    const loggedInUser = useSelector(state => state.user)

    useEffect(() => {
        checkIfLiked()
    }, [])

    const calculateLikes = () => {
        if(amountOfLikes === 1) return `${amountOfLikes} like`
        return `${amountOfLikes} likes`
    }
    const calculateComments = () => {
        let counter = 0
        props.user.video_comments.forEach(comment => {
                counter += 1
        })
        return counter === 1 ? `${counter} comment` : `${counter} comments`
    }
    const calculateSpace = () => {
        const amountOfComments = parseInt(calculateComments())

        if (amountOfComments === 1){
            return !props.user.video_url 
                ? {...Styles.homeProfileCardMobile, marginBottom: 80}
                : {...Styles.homeProfileCardMobile, marginBottom: 80,paddingBottom: 115}
        } else if (amountOfComments >= 2){
            return !props.user.video_url 
            ? {...Styles.homeProfileCardMobile, marginBottom: 135}
            : {...Styles.homeProfileCardMobile, marginBottom: 135,paddingBottom: 115}
        } else {
            return !props.user.video_url 
            ? {...Styles.homeProfileCardMobile}
            : {...Styles.homeProfileCardMobile, paddingBottom: 115}
        }
    }

    const checkIfLiked = () => {
        props.user.video_likes.forEach(like => {
            if (loggedInUser.id === like.user_id) {
                if (!isLiked) setIsLiked(true)
                return true
            }
        })
        return false
    }

    const handleLike = () => {
        fetch(`http://${HOST}:3000/like-or-unlike-video`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                user_id: loggedInUser.id,
                liked_user_id: props.user.id
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res.liked){
                setIsLiked(true)
                setAmountOfLikes(amountOfLikes + 1)
            }else{
                setIsLiked(false)
                setAmountOfLikes(amountOfLikes - 1)
            }
        })
    }


    return (
        <View style={
            Platform.OS === 'web' 
            ? Styles.homeProfileCard 
            : calculateSpace() 
        }>
            <View style={Platform.OS === 'web' ? Styles.homeCardHeaderContainer : Styles.homeCardHeaderContainerMobile}>
                    {props.user.profile_url === "" 
                        ? <View style={Platform.OS === 'web' ? Styles.homeCardProfilePicture : Styles.homeCardProfilePictureMobile}/>
                        : <Image source={{uri: props.user.profile_url}} style={Platform.OS === 'web' ? Styles.homeCardProfilePicture : Styles.homeCardProfilePictureMobile} />
                    }
                <TouchableHighlight onPress={() => history.push(`/user/${props.user.id}`)}>
                    <Text style={Styles.homeCardProfileName}>{props.user.username}</Text>
                </TouchableHighlight>
                <Text style={Styles.homeCardCurrentRole}>{props.user.current_role}</Text>
                
            </View>
            <Divider style={{height: 1.3}}/>
            <View style={{ minHeight: 200}}>
                {
                    !props.user.video_url
                    ?   <View style={Platform.OS === 'web' ? Styles.homeCardVideoContainer : Styles.homeCardVideoContainerMobile} />
                    :   <VideoComponent videoUrl={props.user.video_url}/>
                }
            </View>
            <View style={Platform.OS === 'web' ? Styles.homeCardBottom : Styles.homeCardBottomMobile}>
                <Text style={Styles.homeCardBottomLikes}>{calculateLikes()}</Text>
                <Text style={Styles.homeCardBottomComments}>{calculateComments()}</Text>
                <View style={Styles.homeCardBottomButtons}>
                    <Button onPress={() =>  handleLike()}>{isLiked ? 'unlike' : 'like'}</Button> 
                    <Button onPress={() =>  showModal(true)}>Comment</Button>
                </View>
                <CommentModal user={props.user} modalIsVisible={modalIsVisible} showModal={showModal}/>
            </View>
            <View style={Platform.OS === 'web' ? Styles.homeCardComments : Styles.homeCardCommentsMobile}>
                <ScrollView>
                    {props.user.video_comments.map(comment => (
                        <View key={comment.id} style={Styles.homeCardSingleCommentContainer}>
                            {props.user.profile_url === ""
                                ?   <View style={Styles.homeCommentsPicture} />
                                :   <Image source={{uri: props.user.profile_url}} style={Styles.homeCommentsPicture} />
                            }
                            <View style={Styles.homeSingleComment}>
                                <Text style={{marginLeft: 5}}>
                                    {`${props.user.first_name ?  props.user.first_name : props.user.username} ${props.user.last_name ? props.user.last_name : ''}`}
                                </Text>
                                <Text style={{maxWidth: '95%', marginLeft: 10, marginRight: 10}}>{comment.comment}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}
