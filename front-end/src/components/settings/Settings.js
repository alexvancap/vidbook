import React, { useEffect } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Styles } from '../../Styles'
import { Button, PasswordInput, Text, TextInput, View } from './../'
import { HOST } from './../../constants'
import history from './../history'

export const Settings = () => {
    const information = useSelector(state => state.user)
    const passwords = useSelector(state => state.register)
    const dispatch = useDispatch()

    useEffect(() => {
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
        })
    }, [])

    const checkPasswords = () => {
        if (passwords.password === passwords.repeatedPassword){
            handleSubmit()
            dispatch({type: 'HANDLE_PASSWORD_CHANGE', stateName: 'repeatedPasswordError', input: ''})
        }else{
            dispatch({type: 'HANDLE_PASSWORD_CHANGE', stateName: 'repeatedPasswordError', input: 'false'})
            console.log(passwords.repeatedPasswordError)
        }
    }
    const handleSubmit = () => {
        console.log(information)
        fetch(`http://${HOST}:3000/update-info`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: information.username,
                email: information.email,
                address: information.address,
                password: passwords.password
            })
        })
    }

        return (
            <KeyboardAvoidingView styles={Platform.OS === 'web' ? Styles.settingsContainerWeb : null}
                behavior="position"
            >
                <View>
                    <View style={Styles.settingsCurrentInfo}>
                        <View >
                            <View>
                                <Text style={Styles.settingsItem}>First name:</Text>
                                <Text style={{marginLeft: 10}}>{information.first_name}</Text>
                            </View>
                            <View>
                                <Text style={Styles.settingsItem}>Last name:</Text>
                                <Text style={{marginLeft: 10}}>{information.last_name}</Text>
                            </View>
                        </View>

                        <View>
                            <View>
                                <Text style={Styles.settingsItem}>Username:</Text>
                                <Text style={{marginLeft: 10}}>{information.username}</Text>
                            </View>
                            <View>
                                <Text style={Styles.settingsItem}>email:</Text>
                                <Text style={{marginLeft: 10}}>{information.email}</Text>
                            </View>
                            <View>
                                <Text style={Styles.settingsItem}>adress:</Text>
                                <Text style={{marginLeft: 10}}>{information.adress}</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <TextInput onChangeText=
                        {text => dispatch({type: 'HANDLE_PROFILE_CHANGE', stateName: 'username', input: text})} 
                            label="username" 
                            value={information.username}
                            mode={'outlined'}
                            theme={{ colors: { color: 'blue' } }}
                        />
                        <TextInput onChangeText=
                        {text => dispatch({type: 'HANDLE_PROFILE_CHANGE', stateName: 'email', input: text})} 
                            label="email" 
                            value={information.email}
                            mode={'outlined'}
                            theme={{ colors: { color: 'blue' } }}
                        />
                        <TextInput onChangeText=
                        {text => dispatch({type: 'HANDLE_PROFILE_CHANGE', stateName: 'adress', input: text})} 
                            label="address" 
                            value={information.adress}
                            mode={'outlined'}
                            theme={{ colors: { color: 'blue' } }}
                        />
                        <PasswordInput onChangeText=
                        {text => dispatch({type: 'HANDLE_REGISTER_CHANGE', stateName: 'password', input: text})} 
                            label="password" 
                            value={information.password}
                            mode={'outlined'}
                            theme={{ colors: { color: 'blue' } }}
                        />
                        <PasswordInput onChangeText=
                        {text => dispatch({type: 'HANDLE_REGISTER_CHANGE', stateName: 'repeatedPassword', input: text})} 
                            label="repeat password" 
                            value={information.repeatedPassword}
                            mode={'outlined'}
                            theme={{ colors: { color: 'blue' } }}
                            error={passwords.repeatedPasswordError}
                        />
                        <Button style={Styles.settingsSubmit} onPress={() => checkPasswords()}>Submit</Button>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )

}