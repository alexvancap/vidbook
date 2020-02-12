import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Modal, TextInput, Text, Button} from '../'
import { HOST } from './../../constants'

export const EditInfoModal = (props) => {
    const userInfo = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleFormSubmit = () => {
        fetch(`http://${HOST}:3000/update-user-info`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                introduction: userInfo.introduction,
                current_role: userInfo.current_role,
                degree: userInfo.degree,
                school: userInfo.school,
                skills: userInfo.skills
            })

        })
    }

    return (
        
        <Modal visible={props.modalIsVisible} onDismiss={() => props.showModal(false)}>
            <Modal.Content>
                <Text>Please fill in the information Below:</Text>
                <TextInput onChangeText=
                {text => dispatch({type: 'HANDLE_PROFILE_CHANGE', input: text, stateName: 'introduction'})} 
                    label="Introduction" 
                    value={userInfo.introduction}
                    mode={'outlined'}
                    theme={{ colors: { color: 'blue' } }}
                />
                <TextInput onChangeText=
                {text => dispatch({type: 'HANDLE_PROFILE_CHANGE', input: text, stateName: 'current_role'})} 
                    label="current role" 
                    value={userInfo.current_role}
                    mode={'outlined'}
                    theme={{ colors: { color: 'blue' } }}
                />
                <TextInput onChangeText=
                {text => dispatch({type: 'HANDLE_PROFILE_CHANGE', input: text, stateName: 'degree'})} 
                    label="degree" 
                    value={userInfo.degree}
                    mode={'outlined'}
                    theme={{ colors: { color: 'blue' } }}
                />
                <TextInput onChangeText=
                {text => dispatch({type: 'HANDLE_PROFILE_CHANGE', input: text, stateName: 'skills'})} 
                    label="skills" 
                    value={userInfo.skills}
                    mode={'outlined'}
                    theme={{ colors: { color: 'blue' } }}
                />
                <TextInput onChangeText=
                {text => dispatch({type: 'HANDLE_PROFILE_CHANGE', input: text, stateName: 'school'})} 
                    label="school" 
                    value={userInfo.school}
                    mode={'outlined'}
                    theme={{ colors: { color: 'blue' } }}
                />
                <Button onPress={() => {
                    handleFormSubmit()
                    props.showModal(false)
                }}
                    >Submit</Button>
            </Modal.Content>
        </Modal> 
    )
}