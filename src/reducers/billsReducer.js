
const initialValue=[]

const billsReducer=(state=initialValue,action)=>{

    switch(action.type){
        case 'POST_BILLS':{
            return [...state,{...action.payload}]
        }
        default :{
            return [...state]
        }
    }

}

export default billsReducer