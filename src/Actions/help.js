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


export const fetchDataRequest=()=>{
    return {
        type: 'FETCH_DATA_REQUEST'
    }
}

export const fetchDataSucces=(dataApi)=>{
    return {
        type:'FETCH_DATA_SUCCESS',
        payload:{dataApi}
    }
}

export const fetchDataError=(error)=>{
    return {
        type:'FETCH_DATA_ERROR',
        payload:{error}
    }
}

  
export const clearSnackbar = () => {
    return {
        type:'SNACKBAR_CLEAR'      
    }   
  };

export const listDisplay=(describe)=>{
    return {
        type:'LIST_OPTION',
        payload:{describe}
    };
};






