import React from 'react'
import { TextInput, Heading, Button, PasswordInput } from '../components'
import { View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Styles } from '../Styles'
import history from '../components/history'


const handleLogin = (setState, username, password) => {
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then( res => res.json())
    .then( userId => {
        if (!userId["error"]){
            setState({type: 'SAVE_USER_ID', id: userId})
            history.push('/')
        }else{
            console.log(userId.error)
        }
            
    })
}

export const Login = () => {
    const username = useSelector(state => state.login.username)
    const password = useSelector(state => state.login.password)
    const setState = useDispatch()
    return (
        <View style={Styles.loginContainer}>
            <TextInput onChangeText={
                text => setState({type: 'HANDLE_LOGIN_USERNAME', input: text})} 
                label="Username" 
                value={username}
                mode={'outlined'}
                theme={{ colors: { color: 'blue' } }}/>
            <PasswordInput onChangeText={
                text => setState({type: 'HANDLE_LOGIN_PASSWORD', input: text})} 
                label="Password"
                value={password}
                mode={'outlined'}/>
            <View style={Styles.loginButtons}>
                <Button style={Styles.loginButton}
                    onPress={() => handleLogin(setState, username, password)}>
                        Login
                </Button>
                <Button style={Styles.registerButton}
                    onPress={() => history.push('/register')}
                >
                    Register
                </Button>
            </View>
        </View>
    )
}