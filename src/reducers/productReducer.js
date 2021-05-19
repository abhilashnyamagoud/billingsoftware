
const initialProductValue=[]

const productReducer=(state=initialProductValue,action)=>{

    switch(action.type){
        case 'POST_PRODUCT':{
            return [...state,{...action.payload}]
        }
        case 'GET_PRODUCT':{
            return [...action.payload]
        }
        case 'REMOVE_PRODUCT':{
            return state.filter((ele)=>{
                return ele._id !==action.payload
            })
        }
        default:{
            return [...state]
        }
    }
}
export default productReducer