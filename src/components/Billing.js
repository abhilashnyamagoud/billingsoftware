import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { postBills} from '../actions/billsAction';

const Billing=(props)=>{
    const[date,setDate]=useState('')
    const[custSelect,setCustSelect]=useState('')
    const[prodSelect,setProdSelect]=useState('')
    const[count,setCount]=useState(1)

    const dispatch=useDispatch()

    const customer=useSelector(state=>state.customers)
    // console.log(customer)
    const product=useSelector(state=>state.product)
    // console.log(product)

    const handleDate=(e)=>{
        setDate(e.target.value)
        // console.log(e.target.value)
    }
    const handleCustomer=(e)=>{
        setCustSelect(e.target.value)
        // console.log(e.target.value)
    }
    const handleProduct=(e)=>{
        setProdSelect(e.target.value)
        // console.log(e.target.value)
        
    }
    const handleCount=()=>{
        setCount(count+1)  
    }
    const handleCountDec=()=>{
        if(count <= 0){
            alert('not Valid')
        }else{
        setCount(count-1)
        }
    }
    
    const generateBill=(e)=>{
        const formData={
            date:date,
            customer:custSelect,
            lineItems:{
                product:prodSelect,
                quantity:count
            }
        }
        dispatch(postBills(formData))
        console.log(formData)
    }

    return(
        <div className='mt-5 p-3'>
        <div className='container'>
        <h1 className='display-4'>Billing</h1>
            <div className='row'>
                <div className='col-md-4'>
            <input type='date' className='form-control' value={date} onChange={handleDate} />
             <select className='form-control mt-5 form-select' value={custSelect} onChange={handleCustomer}>
                 <option>Select customer</option>
                 {
                     customer.map((ele)=>{
                         return <option key={ele._id} value={ele.name} >{ele.name} </option>
                     })
                 }
                 </select>   
            </div>
            <div className='col-md-6 d-flex justify-content-end '>
                <div className='card' style={{width:'200px',height:'200px'}}>
                 <div className='card-header'>
                     <div className='card-title'>Bill Amount</div>
                 </div>
                 <div className='card-body'>
                 <h4>Total Bill Amount</h4>
                 </div>

                </div>

            </div>
            </div>
            <h4>Line Items</h4>
            <div className='row mt-3'>
                <div className='col-md-4'>
                 <select className='form-control' value={prodSelect} onChange={handleProduct}>
                     <option>Select Product</option>
                     {
                         product.map((prod)=>{
                             return <option key={prod._id} value={prod.name}>{prod.name} </option>
                         })
                     }
                 </select>
                </div>
                <div className='col-md-2'>
                     <button onClick={handleCountDec} className='btn btn-outline-info btn-sm'>-</button><span className='count ml-1 mr-1'>  {count}  </span>  <button className='btn btn-sm btn-outline-info' onClick={handleCount} >+</button>          
                         </div>
                         <div className='col-md-2'>
                           {
                               product.map((ele)=>{
                                    if(ele.name===prodSelect){
                                        return <p key={ele._id}> INR {ele.price}</p>
                                    }
                               })
                           }
                         </div>
                         <div className='col-md-2'>
                           {
                               product.map((ele)=>{
                                    if(ele.name===prodSelect){
                                        return <p key={ele._id}>INR {ele.price*count}</p>
                                    }
                               })
                           }
                         </div>
            </div>
           
            <button className='btn btn-info mt-5' onClick={generateBill} >Generate Bill</button>
        </div>
        </div>
    )
}

export default Billing