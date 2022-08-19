const initialState={
   tabOption: [
    { label:"Item One"},
    { label:"Item Two"},
    { label:"Item Three"}
       ],    
    value:0, 
    date:new Date(),
    loading:true,
    dataApi:null,
    error:'',
    isSnackBarOpen:true,  
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
                
        case 'FETCH_DATA_REQUEST':
                    return {
                         ...state, 
                       loading:true
                    }
             
        case 'FETCH_DATA_SUCCESS':
                     return {
                          ...state, 
                        loading:false,
                        dataApi:action.payload.dataApi                                                         
                     }
             
         case 'FETCH_DATA_ERROR':
                 return {
                      ...state, 
                     loading:false,
                     dataApi:null,
                     error:action.payload.error
                  
                         } 

        case "SNACKBAR_SUCCESS":
                 return {
                  ...state,
                 isSnackBarOpen:true,
                             
                            };
         case "SNACKBAR_CLEAR":
                   return {
                   ...state,
                  isSnackBarOpen:false
                             }                  
         
        default:
          return state;
  }
    }