

export const menuReducer=()=>{
    return [
       {id:"bars", label:"Bars"},
       {id:"lines", label:"Lines"}
    ]
}

export const selectedMenuReducer=(selectedMenu=null, action)=>{
    if(action.type==='MENU_SELECTED'){
        return action.payload;
    }
    return selectedMenu;
}