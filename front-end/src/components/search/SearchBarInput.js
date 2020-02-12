import React from 'react'
import { TextInput } from 'react-native-paper';
import { theme } from '../theme'
import { useSelector, useDispatch } from 'react-redux'

export const SearchBarInput = (props) => {
  const searchInput = useSelector(state => state.search.input)
  const dispatch = useDispatch()

  

  return (
    <TextInput
      {...props}
      placeholder={'search'}
      onChangeText={text => {
        dispatch({type: 'UPDATE_SEARCH_INPUT', input: text})
      }}
      value={searchInput}
      theme={theme}
    />
  );
}
