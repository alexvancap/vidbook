import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { View } from 'react-native'
import { TextInput, PasswordInput, Button } from '../components'
import { Platform } from 'react-native'
import { Styles } from '../Styles'
import history from '../components/history'


const handleSubmit = (setState, username, firstName, lastName, password, repeatedPassword, email, adress) => {
    if(password === repeatedPassword){
            fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                username: username,
                password: password,
                ['first_name']: firstName,
                ['last_name']: lastName,
                email: email,
                adress: adress,
            })
        }).then(res => res.json())
        .then(console.log)
    }else{
        setState({type: 'PASSWORDS_DID_NOT_MATCH'})
    }
}


export const Register = () => {
    const setState = useDispatch()
    const firstName = useSelector(state => state.register.firstName)
    const lastName = useSelector(state => state.register.lastName)
    const username = useSelector(state => state.register.username)
    const password = useSelector(state => state.register.password)
    const repeatedPassword = useSelector(state => state.register.repeatedPassword)
    const email = useSelector(state => state.register.email)
    const adress = useSelector(state => state.register.adress)
    const repeatPasswordError = useSelector(state => state.register.repeatPasswordError)

    return (
        <View style={Platform.OS === 'web' ? Styles.registerContainer : Styles.registerContainerMobile}>
            <View style={Platform.OS === 'web' ? Styles.registerCombinedForms : null }>
                <TextInput
                    onChangeText={text => 
                        setState({type: 'HANDLE_REGISTER', input: text, stateName: 'username'})}
                    label='username'
                    value={username}
                    mode={'outlined'}
                    theme={{ colors: { color: 'blue' } }}
                />
                <TextInput
                 onChangeText={text => 
                    setState({type: 'HANDLE_REGISTER', input: text, stateName: 'email'})}
                    label='email'
                    value={email}
                    mode={'outlined'}
                    theme={{ colors: { color: 'blue' } }}
                />
            </View>
            <View style={Platform.OS === 'web' ? Styles.registerCombinedForms : null }>
                <TextInput
                onChangeText={text => 
                    setState({type: 'HANDLE_REGISTER', input: text, stateName: 'firstName'})}
                    label='first name'
                    value={firstName}
                    mode={'outlined'}
                    theme={{ colors: { color: 'blue' } }}
                />
                <TextInput
                onChangeText={text => 
                    setState({type: 'HANDLE_REGISTER', input: text, stateName: 'lastName'})}
                    label='last name'
                    value={lastName}
                    mode={'outlined'}
                    theme={{ colors: { color: 'blue' } }}
                />
            </View>
            <View style={Platform.OS === 'web' ? Styles.registerCombinedForms : null }>
                <PasswordInput
                onChangeText={text => 
                    setState({type: 'HANDLE_REGISTER', input: text, stateName: 'password'})}
                    label='password'
                    value={password}
                    mode={'outlined'}
                    theme={{ colors: { color: 'blue' } }}
                />
                <PasswordInput
                onChangeText={text => 
                    setState({type: 'HANDLE_REGISTER', input: text, stateName: 'repeatedPassword'})
                }
                    label='repeat password'
                    value={repeatedPassword}
                    mode={'outlined'}
                    theme={{ colors: { color: 'blue' } }}
                    error='false'
                />
            </View>
            <TextInput
             onChangeText={text => 
                setState({type: 'HANDLE_REGISTER', input: text, stateName: 'adress'})}
                label='adress'
                value={adress}
                mode={'outlined'}
                theme={{ colors: { color: 'blue' } }}
            />
            <View style={Styles.registerAndBackButton}>
                <Button onPress={() => handleSubmit(setState, username, firstName, lastName, password, repeatedPassword, email, adress)}>Register</Button>
                <Button onPress={() => history.push('/login')}>Cancel</Button>
            </View>
        </View>
    )
}