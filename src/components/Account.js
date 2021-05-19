import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getUsers} from '../actions/userAction'

const Account=(props)=>{

    const user=useSelector(state=>state.user)
    const dispatch=useDispatch()
    
    useEffect(()=>{
        dispatch(getUsers())
    },[])

    return(
        <div className='mt-5 p-5 account'>
        <div className='container'>
            <h1 className='display-4 text-light'>Wellcome {user.username} </h1>
            <hr/>
            <div className='row'>
                <div className='col-md-5'>
                    <div className='card rounded border-0'>
                        <div className='card-header bg-dark text-light'>
                            <div className='card-title'>
                            User-Information
                            </div>
                        </div>
                        <div className='card-body bg-info text-light'>
                            <h4>Username: {user.username}</h4>
                            <h4>Email:{user.email} </h4>
                            <h4>BusinessName: {user.businessName} </h4>
                            <h4>Address: {user.address} </h4>
                            <h4>UserId: {user._id} </h4>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        </div>
    )
}

export default Account