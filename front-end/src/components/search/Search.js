import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Checkbox, Text, View } from './../'
import { SearchBarInput } from './SearchBarInput'
import { Image, TouchableHighlight } from 'react-native'
import { HOST } from './../../constants'
import history from './../history'

export const Search = () => {
    const dispatch = useDispatch()
    const searchFilter = useSelector(state => state.search.filter)
    const searchInput = useSelector(state => state.search.input)
    const users = useSelector(state => state.users)
    const searchedUsers = useSelector(state => state.search.searchedUsers)
    const userInfo = useSelector(state => state.user)

    const handleSearch = () => {
        const filteredUsers = users.filter(user => {
            if(searchFilter === 'name'){
                if ((`${user.first_name} ${user.last_name}`).includes(searchInput)) {
                    return user
                }
            }else{
                return searchInput === user.searchInput
            }
        })
        console.log(filteredUsers)
        dispatch({type: 'ADD_FILTERED_USERS', users: filteredUsers})
    }

    useEffect(() => {
        if (!userInfo.id){
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
        }

        if (users.length === 0){
            fetch(`http://${HOST}:3000/get-all-users`, {
                credentials: 'include'
            })
            .then( users => users.json())
            .then(users => dispatch({type: 'STORE_ALL_USERS', users: users}))
        }
    }, [])


    return (
        <View>
            <SearchBarInput />
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Checkbox
                    status={searchFilter === 'name' ? 'checked' : 'indeterminate'}
                    onPress={() => dispatch({type: 'UPDATE_SEARCH_FILTER', filter: 'name'})}
                    color='#4C97FF'
                />
                <Text>Name</Text>
                <Checkbox
                    status={searchFilter === 'current_role' ? 'checked' : 'indeterminate'}
                    onPress={() => dispatch({type: 'UPDATE_SEARCH_FILTER', filter: 'current_role'})}
                    color='#4C97FF'
                />
                <Text>Role</Text>
                <Checkbox
                    status={searchFilter === 'school' ? 'checked' : 'indeterminate'}
                    onPress={() => dispatch({type: 'UPDATE_SEARCH_FILTER', filter: 'school'})}
                    color='#4C97FF'
                />
                <Text>School</Text>
            </View>
            <Button onPress={() => handleSearch()}>Submit</Button>
            {
                searchedUsers.map(user => (
                    <TouchableHighlight onPress={() => history.push(`/user/${user.id}`)}>
                        <View style={{marginTop: 15}}>
                            <Text style={{textAlign: 'center', fontSize: 20, marginBottom: 8}}>
                                {`${user.first_name ? user.first_name : user.username} ${user.last_name ? user.last_name : ''}`}
                            </Text>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                {user.header_url !== ""
                                    ?   <Image
                                            style={{width: '100%', height: 150, borderRadius: 10}}
                                            source={{uri: user.header_url}} 
                                        />
                                    :   null
                                }
                                {user.profile_url !== ""
                                    ?   <Image 
                                            style={{width: 130, height: 130, position: 'absolute', borderRadius: 150, borderColor: 'black', }}
                                            source={{uri: user.profile_url}}
                                        />
                                    :   null
                                }
                                <Image 
                                    style={{width: 130, height: 130, position: 'absolute', borderRadius: 150}}
                                    source={{uri: user.profile_url}}
                                />
                            </View>
                        </View>
                    </TouchableHighlight>
                ))
            }
        </View>
    )
}