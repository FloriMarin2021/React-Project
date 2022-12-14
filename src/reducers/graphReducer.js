

const initialState={
   graphMenu: [
       {id:"bars", label:"Bars"},
       {id:"lines", label:"Lines"}
    ],
    displayMenu:" ",
    loading:true,
    products:[],
    errorMessage:'',
}

export const graphReducer=(state=initialState, action)=>{
    switch(action.type){
      case 'MENU_SELECTED':
        return {
            ...state
        }

      case 'MENU_DISPLAY':
       return {
            ...state, 
           displayMenu:action.payload.description
       }

       case 'FETCH_PRODUCTS_REQUEST':
       return {
            ...state, 
          loading:true
       }

       case 'FETCH_PRODUCTS_SUCCESS':
        return {
             ...state, 
           loading:false,
           products:action.payload.products,
           error:'no error'
        }

        case 'FETCH_PRODUCTS_ERROR':
            return {
                 ...state, 
               loading:false,
               products:[],
               error:action.payload
            }      
      
  
 default:
    return state;
}
}
