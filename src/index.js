import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
const store=configureStore()

console.log(store.getState())
store.subscribe(()=>{
  console.log(store.getState())
})
ReactDOM.render(
  <Provider store={store}> 
 <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);

