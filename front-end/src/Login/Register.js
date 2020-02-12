import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { View } from 'react-native'
import { TextInput, PasswordInput, Button } from '../components'
import { Platform, KeyboardAvoidingView } from 'react-native'
import { Styles } from './../Styles'
import history from './../components/history'
import { HOST } from './../constants'


const handleSubmit = (dispatch, info) => {
    if(info.password === info.repeatedPassword){
            fetch(`http://${HOST}:3000/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                username: info.username,
                password: info.password,
                ['first_name']: info.firstName,
                ['last_name']: info.lastName,
                email: info.email,
                adress: info.adress,
            })
        }).then(res => res.json())
        .then(console.log)
    }else{
        dispatch({type: 'PASSWORDS_DID_NOT_MATCH'})
    }
}


export const Register = () => {
    const dispatch = useDispatch()
    const info = useSelector(state => state.register)

    return (
        <KeyboardAvoidingView behavior="position" style={Platform.OS === 'web' ? Styles.registerContainer : Styles.registerContainerMobile}>
                <View style={Platform.OS === 'web' ? Styles.registerCombinedForms : null }>
                    <TextInput
                        onChangeText={text => 
                            dispatch({type: 'HANDLE_REGISTER', input: text, stateName: 'username'})}
                        label='username'
                        value={info.username}
                        mode={'outlined'}
                        theme={{ colors: { color: 'blue' } }}
                    />
                    <TextInput
                    onChangeText={text => 
                        dispatch({type: 'HANDLE_REGISTER', input: text, stateName: 'email'})}
                        label='email'
                        value={info.email}
                        mode={'outlined'}
                        theme={{ colors: { color: 'blue' } }}
                    />
                </View>
                <View style={Platform.OS === 'web' ? Styles.registerCombinedForms : Styles.registerCombinedFormsMobile }>
                    <View style={{minWidth: '42%'}}>
                        <TextInput
                        onChangeText={text => 
                            dispatch({type: 'HANDLE_REGISTER', input: text, stateName: 'firstName'})}
                            label='first name'
                            value={info.firstName}
                            mode={'outlined'}
                            theme={{ colors: { color: 'blue' } }}
                        />
                    </View>
                    <View style={{minWidth: '55%'}}>
                        <TextInput
                        onChangeText={text => 
                            dispatch({type: 'HANDLE_REGISTER', input: text, stateName: 'lastName'})}
                            label='last name'
                            value={info.lastName}
                            mode={'outlined'}
                            theme={{ colors: { color: 'blue' } }}
                        />
                    </View>
                </View>
                <View style={Platform.OS === 'web' ? Styles.registerCombinedForms : null }>
                    <PasswordInput
                    onChangeText={text => 
                        dispatch({type: 'HANDLE_REGISTER', input: text, stateName: 'password'})}
                        label='password'
                        value={info.password}
                        mode={'outlined'}
                        theme={{ colors: { color: 'blue' } }}
                    />
                    <PasswordInput
                    onChangeText={text => 
                        dispatch({type: 'HANDLE_REGISTER', input: text, stateName: 'repeatedPassword'})
                    }
                        label='repeat password'
                        value={info.repeatedPassword}
                        mode={'outlined'}
                        theme={{colors: { color: 'blue' }}}
                    />
                </View>
                <TextInput
                onChangeText={text => 
                    dispatch({type: 'HANDLE_REGISTER', input: text, stateName: 'adress'})}
                    label='adress'
                    value={info.adress}
                    mode={'outlined'}
                    theme={{ colors: { color: 'blue' } }}
                />
                <View style={Styles.registerAndBackButton}>
                    <Button onPress={() => handleSubmit(dispatch, info)}>Register</Button>
                    <Button onPress={() => history.push('/login')}>Cancel</Button>
                </View>
        </KeyboardAvoidingView>
    )
}