import React from 'react';
import { theme } from './theme'
import { TextInput as TextField } from 'react-native'
import { TextInput as NativePaperTextInput, HelperText, Switch } from 'react-native-paper'


const ToggleSwitch = ({ onPress, ...props}) => (
    <Switch onValueChange={onPress} {...props}/>
)

const PasswordInput = (props) => (
    <TextInput secureTextEntry={true} {...props} />
)

const TextInput = props => (
    <NativePaperTextInput 
        {...props} 
        style={{borderRadius: 5, overflow: 'hidden'}}
        theme={theme}
    />
)

export { TextField, TextInput, PasswordInput, HelperText, ToggleSwitch }