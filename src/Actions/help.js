export const tabSelected=(menu)=>{
    return {
        type:'TAB_SELECTED',
        payload:{menu}
    };
};

export const tabDisplay=(description)=>{
    return {
        type:'TAB_DISPLAY',
        payload:{description}
    };
};

export const tabValue=(value)=>{
    return {
        type:'TAB_VALUE',
        payload:{value}
    };
};




