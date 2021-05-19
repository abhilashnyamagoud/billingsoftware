const initialValue=[]

const userReducer=(state=initialValue,action)=>{
    switch(action.type){
        // case 'POST_USERS':{
        //     return [...state]
        // } 
        // case 'POST_TOKEN':{
        //     return [...state]
        // }
        case 'GET_USER':{
            return {...action.payload}
        }
        default:{
            return[...state]
        }
    }
}

export default userReducer