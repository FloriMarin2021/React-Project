
import {selectedMenuReducer, menuReducer} from './graphReducer.js';
import { combineReducers } from "redux"


export default combineReducers({
    menus:menuReducer,
    selectedMenu:selectedMenuReducer
});


