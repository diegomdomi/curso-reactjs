import {ACTIONS_PRODUCTS} from "../actions/listProducts"

const initialState = {
    products: [],
}

const products = (state= initialState.products,action) => {
    switch(action.type){
        case ACTIONS_PRODUCTS.PRODUCTS:
            state.push(action.payload);
                return[...state];
            default:
                 return [...state];
    }
}
export default products