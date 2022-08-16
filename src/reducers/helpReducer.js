const initialState={
   tabOption: [
    { label:"Item One"},
    { label:"Item Two"},
    { label:"Item Three"}
       ],    
    value:0 
   
 }

 export const helpReducer=(state=initialState, action)=>{
    
    switch(action.type){
        case 'TAB_VALUE':
            return {
                 ...state, 
                value:action.payload.value
            }  
         
        default:
          return state;
  }
    }