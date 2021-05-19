import axios from 'axios';

const result=JSON.parse(localStorage.getItem('token'))||[]

const postAction=(value)=>{
    return{
        type:'POST_BILLS',
        payload:value
    }
}

export const postBills=(formData)=>{
    return(dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/bills',formData,{
            headers:{Authorization:`Bearer ${result.token}`}
        })
        .then((res)=>{
            const value=res.data
            console.log(value)
            dispatch(postAction(value))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

}
