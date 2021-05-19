import axios from 'axios';

const postCustomer=(values)=>{
    return{
        type:'POST_CUSTOMERS',
        payload:values
    }
}
const result=JSON.parse(localStorage.getItem('token'))||[]

export const customerPost=(customer)=>{
    return(dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/customers',customer,{
            headers:{Authorization:`Bearer ${result.token}`}
        })
        .then((res)=>{
            const cust=res.data
            dispatch(postCustomer(cust))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
const customerGet=(value)=>{
    return{
        type:'GET_CUSTOMERS',
        payload:value
    }
}

export const getCustomer=()=>{
    return(dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/customers',{
            headers:{Authorization:`Bearer ${result.token}`}
        })
        .then((res)=>{
            const value=res.data
            dispatch(customerGet(value))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
const removeAction=(item)=>{
    return{
        type:'REMOVE_CUST',
        payload:item._id
    }
}

export const customerRemove=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/customers/${id}`,{
            headers:{Authorization:`Bearer ${result.token}`}
        })
        .then((res)=>{
            const item=res.data
            dispatch(removeAction(item))
        })
    }
}
const updateCust=(val)=>{
        return{
            type:'UPDATE_CUST',
            payload:val
        }
}

export const customerUpdate=(id)=>{
    return(dispatch)=>{
        axios.put(`http://dct-billing-app.herokuapp.com/api/customers/${id}`,{
            headers:{Authorization:`Bearer ${result.token}`}
        })
        .then((res)=>{
            const val=res.data
            dispatch(updateCust(val))
        })
    }
}