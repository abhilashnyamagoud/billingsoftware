import axios from 'axios';
import swal from 'sweetalert';


const postUsers=(users)=>{
    return{
        type:'POST_USERS',
        payload:users
    }
}

export const startPostUsers=(values)=>{
    return(dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/users/register',values)
        .then((res)=>{
            const users=res.data
            if(users.hasOwnProperty('errors')){
                swal(users.errors)
            }else{
                dispatch(postUsers(users))
                swal("Great!", "You Registered In Successfully!", "success");

            }   
            
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
const loginUser=(value)=>{
    return{
        type:'POST_TOKEN',
        payload:value
    }
}

export const userLogin=(value)=>{
    return(dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/users/login',value)
        .then((res)=>{
            const token=res.data
            if(token.hasOwnProperty('errors')){
                swal(token.errors)
            }else{
                localStorage.setItem('token',JSON.stringify(token))
                dispatch(loginUser(token))
                swal("Great!", "You Logged In Successfully!", "success");
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
    const usergetAction=(value)=>{
        return{
            type:'GET_USER',
            payload:value
        }
    }
     const result=JSON.parse(localStorage.getItem('token'))||[]
export const getUsers=()=>{

    return(dispatch)=>{
       
        axios.get('http://dct-billing-app.herokuapp.com/api/users/account',{
            headers:{Authorization:`Bearer ${result.token}`}
        })

        .then((res)=>{
            const value=res.data
            // console.log(value)
            dispatch(usergetAction(value))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}