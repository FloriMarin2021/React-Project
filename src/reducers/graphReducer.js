

const initialState={
   graphMenu: [
       {id:"bars", label:"Bars"},
       {id:"lines", label:"Lines"}
    ]
}

export const graphReducer=(state=initialState, action)=>{
    if(action.type==='MENU_SELECTED'){
        return {
            ...state,
        }
    }
    return state;
}
