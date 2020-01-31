import * as React from 'react';
import { Text } from 'react-native-paper';
import { useHistory } from "react-router-dom";

export const Home = (props) => {
    const history = useHistory()
    console.log(history)
    return (
      <Text>home</Text>
      
    )
  }