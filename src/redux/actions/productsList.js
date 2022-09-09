export const ACTIONS_PRODUCTS = {

    PRODUCTS: "PRODUCTS"
}
export const productsList = (product) =>{
    return{
        type: ACTIONS_PRODUCTS.PRODUCTS,
        payload:product
    }
}
