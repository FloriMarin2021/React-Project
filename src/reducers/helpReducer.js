const initialState={
   tabOption: [
    { label:"Item One"},
    { label:"Item Two"},
    { label:"Item Three"}
       ],    
    value:0, 
    date:new Date(),
   
 }

 export const helpReducer=(state=initialState, action)=>{
    
    switch(action.type){
        case 'TAB_VALUE':
            return {
                 ...state, 
                value:action.payload.value
            } 
        case 'CALENDAR_CHANGE':
                return {
                     ...state, 
                    date:action.payload.date
                }   
         
        default:
          return state;
  }
    }