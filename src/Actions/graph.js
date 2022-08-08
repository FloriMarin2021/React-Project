
export const menuSelected=(menu)=>{
    return {
        type:'MENU_SELECTED',
        payload:{menu}
    };
};

export const menuDisplay=(description)=>{
    return {
        type:'MENU_DISPLAY',
        payload:{description}
    };
};

