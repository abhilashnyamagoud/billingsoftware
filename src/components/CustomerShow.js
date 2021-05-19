import React from 'react';
import {useDispatch} from 'react-redux';
import {customerRemove,customerUpdate} from '../actions/customerAction'
const CustomerShow=(props)=>{
    const {_id,name,email,mobile}=props
    const dispatch=useDispatch()

    const handleRemove=(id)=>{
        dispatch(customerRemove(id))
    }
    const handleUpdate=(id)=>{
        dispatch(customerUpdate(id))
    }

    return(
        <div className='card p-2 mb-2 border-0 rounded'>
            <div className='card-header bg-info'>
                <div className='card-title'>
                   Name: {name}
                </div>
            </div>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-md-8'>
                    <p>Email: {email} </p>
                <p>Mobile: {mobile}</p>
                    </div>  
                    <div className='col-md-4'>
                        <button className='btn btn-outline-info btn-sm mr-2' onClick={()=>{
                            handleRemove(_id)
                        }}>Delete</button>
                        <button className='btn btn-outline-danger btn-sm' onClick={()=>{
                                handleUpdate(_id)
                        }}>Update</button>
                        </div>             
                </div>
            </div>
           
            
        </div>
    )
}

export default CustomerShow