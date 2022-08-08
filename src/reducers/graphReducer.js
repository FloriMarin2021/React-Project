

const initialState={
   graphMenu: [
       {id:"bars", label:"Bars"},
       {id:"lines", label:"Lines"}
    ],
    displayMenu:" "
}
export const handleChange = (event)=> {
   
    console.log("event", event.target.value)
    this.setState({displayMenu: event.target.value });
  };

export const graphReducer=(state=initialState, action)=>{
    switch(action.type){
      case action.type==='MENU_SELECTED':
        return {
            ...state
        }
      case action.type==='MENU_DISPLAY':
       return {
            ...state, 
           displayMenu:action.payload
       }

      
  
 default:
    return state;
}
}
