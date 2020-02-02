export const checkIfLoggedIn = (userInfo, dispatch) => {
    console.log('waddup')
    if(!userInfo.id){
        fetch('http://localhost:3000/get-user', {
            credentials: 'include'
        }).then(res => res.json())
        .then(res => {
            if (res){
                dispatch({type: 'SAVE_USER_INFO', info: res})
            }else{
                false
            }
        })
    }else{
        false
    }
}