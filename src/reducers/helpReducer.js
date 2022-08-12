const initialState={
   tabOption: [
        {id:"one", label:"Item One"},
        {id:"two", label:"Item Two"},
        {id:"three", label:"Item Three"}
     ],
     displayTab:" ",
     value:0
     
 }

 export const helpReducer=(state=initialState, action)=>{
    
    switch(action.type){
        case 'TAB_SELECTED':
            return {
                ...state
            }
    
          case 'TAB_DISPLAY':
           return {
                ...state, 
               displayTab:action.payload.description
           }

           case 'TAB_VALUE':
            return {
                 ...state, 
                value:action.payload.value
            }
  
         
   default:
      return state;
  }



    }