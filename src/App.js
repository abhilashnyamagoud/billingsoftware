import React,{useState,useEffect} from 'react';
import './App.css';
import {Link,Route,Redirect} from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Customers from './components/Customers'
import Account from './components/Account'
import swal from 'sweetalert';
import Product from './components/Product'
import Billing from './components/Billing'

const App=(props)=>{
const [toggle2,setToggle2]=useState(false)

  const logout=()=>{
    localStorage.removeItem('token')
    swal("Good job!", "You Successfully LoggedOut!", "success");
  
    
  }
  const handleAuth=()=>{
    setToggle2(!toggle2)
    // window.location.reload()
  }
  useEffect(()=>{
     if(localStorage.getItem('token')){
       handleAuth()       
     }
  },[])
  
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-dark navbar-dark fixed-top'>
        <div className='container'>
          <a href='/' className='navbar-brand text-info' >Bangalore restaurant</a>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
                <Link to='/' className='nav-link'>Home</Link>
            </li>
            {
              toggle2 ? <><li className='nav-item'><Link to='/customers' className='nav-link' >Customers</Link> </li> 
              <li className='nav-item' onClick={logout} ><a href='/' className='nav-link'>Logout </a> </li>
              <li className='nav-item'><Link to='/account' className='nav-link'>account</Link> </li>
              <li className='nav-item'><Link to='/product' className='nav-link' >Product</Link> </li>
              <li className='nav-item'><Link to='/billing' className='nav-link'>Billing</Link> </li>
               </> :<>
                    <li className='nav-item'>
              <Link className='nav-link' to='/register'>Register</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/login'>Login</Link>
            </li>
              </>
            }
          </ul>
        </div>
      </nav>
      <Route path='/' exact={true} component={Home} />
      <Route path='/register' exact={true} component={Register} />
      <Route path='/login' exact={true} component={Login} />
      <Route path='/customers' exact={true} component={Customers} />
      <Route path='/account' exact={true} component={Account} />
      <Route path='/product' exact={true} component={Product} />
      <Route path='/billing' exact={true} component={Billing} />
    </div>
  )
}

export default App;
