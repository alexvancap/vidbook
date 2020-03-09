import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { theme } from './theme'
import { useDispatch } from 'react-redux'
import history from './history'
import { HOST } from './../constants'

export const AppBar = () =>  {
  const dispatch = useDispatch()
  const _goBack = () => {
    history.goBack()
  };

  const handleLogout = () => {
    fetch(`http://${HOST}:3000/logout`, { 
        credentials: 'include' 
    })
    .then(() => {
        history.push('/login')
        dispatch({type: 'SAVE_USER_ID', id: null})
    })
  }
  return (
    <Appbar.Header theme={theme} style={{zIndex: 2}}>
      <Appbar.BackAction
        onPress={_goBack}
      />
      <Appbar.Content
        title="Vidbook"
        subtitle="get hired get paid"
      />
      <Appbar.Action
        icon='account-arrow-right'
        onPress={handleLogout}
      />
    </Appbar.Header>
  );
}