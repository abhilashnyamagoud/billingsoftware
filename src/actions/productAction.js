import axios from 'axios';

const result=JSON.parse(localStorage.getItem('token'))||[]

const postAction=(value)=>{
    return{
        type:'POST_PRODUCT',
        payload:value
    }
}

export const productPost=(value)=>{
    return(dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/products',value,{
            headers:{Authorization:`Bearer ${result.token}`}
        })
        .then((res)=>{
            const value=res.data
            // console.log('value', value)
            dispatch(postAction(value))

        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
const getAction=(value)=>{
    // console.log('result',value)
    return{
        type:'GET_PRODUCT',
        payload:value
    }
}

export const getProduct=()=>{
    return(dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/products',{
            headers:{Authorization:`Bearer ${result.token}`}
        })
        .then((res)=>{
            const value=res.data
            dispatch(getAction(value))
        })
        .catch((err)=>{
            alert(err.message)
            alert(err.message)
        })
    }
}

const removeAction=(id)=>{
    
    return{
        type:'REMOVE_PRODUCT',
        payload:id
    }
}

export const removeProduct=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/products/${id}`,{
            headers:{Authorization:`Bearer ${result.token}`}
        })
        .then((res)=>{
            const value=res.data
            dispatch(removeAction(value._id))
        })
        .catch((err)=>{
            alert(err.message)
            // console.log('error',err.message)
        })
    }
}