import React, {useState} from 'react'
import { Modal, View, Button } from './../'
import { Styles } from './../../Styles'
import { TextInput, Image } from 'react-native'
import { IconButton } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'
import { HOST } from './../../constants'

export const CommentModal = (props) => {
    const [commentContent, setCommentContent] = useState('')
    const loggedInUser = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleSubmit = () => {
        fetch(`http://${HOST}:3000/create-comment/`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: commentContent,
                user_id: props.user.id,
                user_who_commented_id: loggedInUser.id
            })
        }).then(res => res.json())
        .then(res => dispatch({
            type:'ADD_COMMENT', 
            content: res.comment, 
            userId: res.user_id, 
            userThatCommented: loggedInUser
        }))
    }
    return(
        <Modal visible={props.modalIsVisible} onDismiss={() => props.showModal(false)}>
            <Modal.Content >
                <View style={{...Styles.homeCardSingleCommentContainer, marginTop: 25}}>
                {props.user.profile_url === "" 
                    ?   <View style={Styles.homeCommentsPicture}>
                           <IconButton size={40}
                                icon='emoticon-excited-outline'
                                color='white'
                                style={{alignSelf: 'center'}}
                                zIndex={100}
                            />
                        </View>
                    : <Image source={{uri: loggedInUser.profile_url}} style={Styles.homeCommentsPicture} />
                }
                    <View style={Styles.homeSingleComment}>
                        <TextInput multiline={true}
                            onChangeText={text => setCommentContent(text)} 
                            value={commentContent}
                            style={{width: '95%'}}
                        />
                    </View>
                </View>
                <Button onPress={() => 
                    {handleSubmit()
                    props.showModal(false)
                }}>Submit</Button>
            </Modal.Content>
        </Modal>
    )
}