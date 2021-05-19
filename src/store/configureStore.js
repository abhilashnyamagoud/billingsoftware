
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducers/userReducer';
import customersReducer from '../reducers/customersReducer';
import productReducer from '../reducers/productReducer';
import billsReducer from '../reducers/billsReducer'

const configureStore=()=>{
    const store=createStore(combineReducers({
        user:userReducer,
        customers:customersReducer,
        product:productReducer,
        bills:billsReducer
    }),applyMiddleware(thunk))
    return store
}


export default configureStore