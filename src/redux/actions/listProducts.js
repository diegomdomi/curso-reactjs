export const ACTIONS_PRODUCTS ={
    PRODUCTS : "PRODUCTS",
}

export const listProducts =(list)=>{
    return{
        type: ACTIONS_PRODUCTS.PRODUCTS,
        payload: list
    }
}