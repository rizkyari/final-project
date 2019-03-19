import axios from 'axios'
import cookies from 'universal-cookie'


const cookie = new cookies()

export const onLoginClick = (user, pass) => {
    return (dispatch) => {
        axios.get("http://localhost:1997/users", {
            params: {
                username: user,
                password: pass
            }
        }).then(res => { 
            if (res.data.length > 0) {
                console.log(res.data[0])

                const {id, username} = res.data[0]

                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: {id, username}
                })
                
                cookie.set('masihLogin',username, {path:'/'})

            } else {
                dispatch({
                    type:'AUTH_ERROR',
                    payload:'Username and Password gak match'
                })
                setTimeout(() => {
                    dispatch(
                        {type: 'AUTH_NO_MESS'
                    })
                },3000)
            }

        }).catch(err => {
            console.log("System Error")
        })
    }
}


export const onRegisterUser = (user,email,pass) => {
    return dispatch => {
        axios.get('http://localhost:1997/users', {
            params: {
                username: user
            }
        }).then(res => {
            if(res.data.length === 0){
                axios.post('http://localhost:1997/users', {
                    username: user,
                    email: email,
                    password: pass
                }).then(res => {
                    dispatch({
                        type:'AUTH_SUCCESS',
                        payload:'Register Succeeded'
                    })
                    setTimeout(() => {
                        dispatch({
                            type: 'AUTH_NO_MESS'
                        })
                    },3000)
                })
            } else {
                dispatch({
                    type: 'AUTH_ERROR',
                    payload: 'Username has been taken'
                })
                setTimeout(() => {
                    dispatch({
                        type: 'AUTH_NO_MESS'
                    })
                },3000)
            }
        })



  
    }
}

export const onLogoutUser = () => {
    cookie.remove('masihLogin')
    return {
        type: 'LOGOUT_USER'
    }
}

export const keepLogin = (user) => {
    return dispatch => {
        axios.get('http://localhost:1997/users',{
            params:{
                username: user
            }
        })
        .then(res =>{
            if(res.data.length !== 0){
                dispatch({
                    type: 'LOGIN_SUCCESS', 
                    payload: {username: user}
                })
            }
        })
    }
}