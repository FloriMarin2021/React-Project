export const tabValue=(value)=>{
    return {
        type:'TAB_VALUE',
        payload:{value}
    };
};

export const calendarChange=(date)=>{
    return {
        type:'CALENDAR_CHANGE',
        payload:{date}
    };
};






