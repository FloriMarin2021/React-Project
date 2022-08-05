import * as actions from './actionTypes';

//action creator
//return an action
export const menuSelected=(menu)=>{
    return {
        type: actions.MENU_SELECTED,
        payload:menu
    };
};