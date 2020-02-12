import React, { useEffect } from 'react'
import { Platform, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Styles } from '../../Styles'
import { Area, View } from './../'
import { HOST } from './../../constants'
import history from './../history'
import { HomeCard } from './HomeCard'


export const Home = () => {
    const dispatch = useDispatch()
    const userInfo = useSelector(state => state.user)
    const users = useSelector(state => state.users).sort(function(a, b){return a.id-b.id})

    
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
            .then(users => {
                dispatch({type: 'STORE_ALL_USERS', users: users})})
        }
    }, [])


    return(
        <ScrollView>
            <Area inline alignX="center">
                <View style={Platform.OS === 'web' ? Styles.homeContainer : Styles.homeContainerMobile}>
                    {users.map(user => <HomeCard key={user.id} user={user}/>)}
                </View>
            </Area>
        </ScrollView>
    )

}