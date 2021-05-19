import React from 'react';
import {useDispatch} from 'react-redux';
import {removeProduct} from '../actions/productAction';
import swal from 'sweetalert';

const ProductShow=(props)=>{
    const {_id,name,price}=props
    console.log(props)
    const dispatch=useDispatch()
    const handleRemove=(id)=>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                dispatch(removeProduct(id))
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
        
    }

    return(
        <div>
            <div className='container'>
                
                <div className='card mb-2 border-0 rounded p-2'>
                    <div className='card-header bg-info'>
                        <div className='card-title'>{name}</div>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-md-6'>
                            <h1>{price} </h1>
                            </div>
                            <div className='col-md-6'>
                            <button onClick={()=>{
                                handleRemove(_id)
                            }} className='btn btn-outline-danger btn-sm mr-2'>Delete</button>
                            <button className='btn btn-outline-info btn-sm'>Update</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                

            </div>
            
        </div>
    )
}

export default ProductShow