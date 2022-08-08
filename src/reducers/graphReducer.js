

const initialState={
   graphMenu: [
       {id:"bars", label:"Bars"},
       {id:"lines", label:"Lines"}
    ],
    displayMenu:" "
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
      
  
 default:
    return state;
}
}
