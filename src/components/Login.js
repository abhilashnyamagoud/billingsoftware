import React,{useState,useEffect} from 'react'
import { useFormik } from 'formik';
import {useDispatch} from 'react-redux'
import {userLogin} from '../actions/userAction'
import {Redirect} from 'react-router-dom';


const Login=(props)=>{

    const [toggle,setToggle]=useState(false)
const dispatch=useDispatch()

useEffect(()=>{
    if(localStorage.getItem('token')){
        setToggle(!toggle)
    }
 },[])

    const validate=values=>{
        const errors={};
        if(!values.email){
            errors.email='Required'
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email='Invalid email address'
        }
        if(!values.password){
            errors.password='Required'
        }
        return errors
    }

    const formik=useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate,
        onSubmit:values=>{
         dispatch(userLogin(values))  
        }
    })
    return(
        <div className='mt-5 p-3 bg-light'>
             <div className='row'>
                <div className='col'>
                    <h4><a href='/login' className='text-danger'>Bangalore Restaurant / </a><a href='/login' className='text-secondary'>Login</a> </h4>
                </div>
                </div>
            <div className='container'>
            <h1 className='display-3'>Login</h1>
            <div className='row'>
                <div className='col-md-6'>
                <div className='card'>
                    <div className='card-header'>
                        <div className='card-title'>Login To Account</div>
                    </div>
                    <div className='card-body'>
                        <form onSubmit={formik.handleSubmit}>
                        <label className='form-label'>Email</label>
                        <input type='email' name='email' id='email' className='form-control' value={formik.values.email} onChange={formik.handleChange} placeholder='Enter your Email' />
                        {formik.errors.email && <div className='text-danger text-center'>{formik.errors.email}</div>}
                        <label className='form-label mt-3'>Password</label>
                        <input type='password' name='password' id='password' className='form-control' value={formik.values.password} onChange={formik.handleChange} placeholder='Enter your Password' />
                        {formik.errors.password && <div className='text-danger text-center'>{formik.errors.password}</div>}
                        <input type='submit' value='Login' className='btn btn-outline-success btn-block mt-4' />
                        </form>
                    </div>
                    </div>   
                </div>
            </div>
            </div>
            {
                toggle && <Redirect to='/' />
            }
        </div>
    )
}

export default Login