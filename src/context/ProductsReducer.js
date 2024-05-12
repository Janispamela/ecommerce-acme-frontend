const ProductsReducer =  (globalState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...globalState,
                movies: action.payload,
             };

             default:
                return globalState;
    }
};
export default ProductsReducer;