
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

export const fetchProductsRequest=()=>{
    return {
        type: 'FETCH_PRODUCTS_REQUEST'
    }
}

export const fetchProductsSucces=(products)=>{
    return {
        type:'FETCH_PRODUCTS_SUCCESS',
        payload:{products}
    }
}

export const fetchProductError=(error)=>{
    return {
        type:'FETCH_PRODUCTS_ERROR',
        payload:error
    }
}

