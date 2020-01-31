import React, { useState } from 'react';
import { Button as Pressable, FAB, ToggleButton } from 'react-native-paper'
import { theme } from './theme'

const Button = ({ children, mode = "contained", ...rest }) => (
    <Pressable style={{ padding: 5, margin: 5}} mode={mode} theme={theme} {...rest}>{children}</Pressable>
)

const BubbleButton = (props) => (
    <FAB
        style={{
            margin: 16,
            width: props.small ? 40 : 56
        }}
        {...props}
    />
)

export {
    Button, BubbleButton, ToggleButton
}
