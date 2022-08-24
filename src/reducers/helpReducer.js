

const initialState={
   tabOption: [
    { label:"Item One"},
    { label:"Item Two"},
    { label:"Item Three"}
       ],    
    value:0, 
    date:new Date(),
    isLoading:true,
    dataApi:null,
    error:'',
    isOpen:true,
    list:[
      {label:"google", link:"https://www.google.com/"},
      {label:"youtube", link:"www.youtube.com"},
      {label:"linkedin", link:"https://linkedin.com/"}
    ],
  
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
                        isLoading:false,
                        isOpen:true,
                        dataApi:action.payload.dataApi                                                         
                     }
             
         case 'FETCH_DATA_ERROR':
                 return {
                      ...state, 
                     isLoading:false,
                     isOpen:true,
                     dataApi:{
                       ...state.dataApi,
                       data:null,
                       message:action.payload.error.message
                    }
                  
                         } 

         case "SNACKBAR_CLEAR":
                   return {
                   ...state,
                  isOpen:false
                             } 
         
          case 'LIST_OPTION':
                return {
                  ...state, 
                describe:action.payload.describe
                       } 
        
         
        default:
          return state;
  }
    }