

const initialValueCustomer=[]

const customersReducer=(state=initialValueCustomer,action)=>{
    switch(action.type){
        case 'POST_CUSTOMERS':{
            return [...state,{...action.payload}]
        }
        case 'GET_CUSTOMERS':{
            return [...action.payload]
        }
        case 'REMOVE_CUST':{
            return state.filter((ele)=>{
                return ele._id !==action.payload
            })
        }
        case 'UPDATE_CUST':{
            return state.map((cust)=>{
                if(cust._id ===action.payload.id){
                    return{...cust,...action.payload}
                }else{
                    return{...state}
                }
            })
        }
        default:{
            return [...state]
        }
    }
}

export default customersReducer