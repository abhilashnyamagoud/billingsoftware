import React,{useEffect} from 'react';
import { useFormik } from 'formik';
import {useDispatch,useSelector} from 'react-redux';
import {productPost,getProduct} from '../actions/productAction';
import ProductShow from './ProductShow'


const Product=(props)=>{
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getProduct())
    },[])

    const product=useSelector(state=>state.product)
    // console.log(product)

    const validate=values=>{
        const errors={};
        if(!values.name){
            errors.name='Required'
        }
        if(!values.price){
            errors.price='Required'
        }
        return errors
    }

    const formik=useFormik({
        initialValues:{
            name:'',
            price:''
        },
        validate,
        onSubmit:values=>{
            // console.log(values)
            dispatch(productPost(values))
        }
    });

    return(
        <div className='mt-5 p-3 product'>
            <div className='row'>
                <div className='col'>
                    <h4><a href='/register' className='text-danger'>Bangalore Restaurant /</a><a href='/register' className='text-secondary'> product</a> </h4>
                </div>
            </div>
            <div className='container'>
                <h1 className='display-4'><b>Product </b> </h1>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card border-0 p-2 rounded'>
                            <div className='card-header bg-info'>
                                <div className='card-title'>Product</div>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={formik.handleSubmit}>
                                    <label className='form-label'>Product Name</label>
                                    <input type='text' className='form-control form-control-lg' placeholder='Enter Product Name' id='name' name='name' value={formik.values.name} onChange={formik.handleChange} />
                                    {formik.errors.name && <div className='text-danger'>{formik.errors.name} </div>}
                                    <label>Price</label>
                                    <input type='number' className='form-control form-control-lg' placeholder='Enter Product Price' id='price' name='price' value={formik.values.price} onChange={formik.handleChange} />
                                    {formik.errors.price && <div className='text-danger'>{formik.errors.price} </div>}
                                    <input type='submit' value='Add Item' className='btn btn-outline-primary btn-block mt-3 btn-lg'/>
                                </form>

                            </div>

                        </div>

                    </div>
                    <div className='col-md-6'>
                        {
                            product.map((ele)=>{
                                return <ProductShow key={ele._id} {...ele} />
                            })
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Product