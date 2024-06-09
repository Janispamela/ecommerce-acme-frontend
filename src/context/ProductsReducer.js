const ProductsReducer =  (globalState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...globalState,
                products: action.payload,
             };

             case "GET_PRODUCT":
                return {
                    ...globalState,
                    product: action.payload,
                 };

            case "ADD_CART_PRODUCT":
                    return {
                      ...globalState,
                      cart: globalState.cart.find(
                        (product) => product.id === action.payload.id
                      )
                        ? [...globalState.cart]
                        : [...globalState.cart, action.payload],
                    };

                    case "DELETE_CART_PRODUCT":
                        return {
                          ...globalState,
                          cart: globalState.cart.filter(
                            (product) => product.id != action.payload
                          ),
                        };
                  
                      default:
                        return globalState;
                    

    }
};
export default ProductsReducer;