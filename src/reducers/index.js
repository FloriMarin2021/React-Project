

import { combineReducers } from "redux"


//no arguments
const menuReducer=()=>{
    return [
       {id:"bars", label:"Bars"},
       {id:"lines", label:"Lines"}
    ]
}

const selectedMenuReducer=(selectedMenu=null, action)=>{
    if(action.type==='MENU_SELECTED'){
        return action.payload;
    }
    return selectedMenu;
}

export default combineReducers({
    menus:menuReducer,
    selectedMenu:selectedMenuReducer
});


