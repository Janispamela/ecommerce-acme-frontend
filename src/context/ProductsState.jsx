import { useReducer, useCallback } from "react";
import ProductsContext from "./ProductsContext";
import ProductsReducer from "./ProductsReducer";
import PropTypes from "prop-types";
import { getProductsService, getProductService} from "../services/productsServices";

const initialState = {
    products: [],
    product: {},
    cart: [],
};

const ProductsState = ({ children }) => {
    const [globalState, dispatch] = useReducer(ProductsReducer, initialState);

    const getProductsAction = useCallback(async () => {
        const resp = await getProductsService();
       
        const action = {
            type: "GET_PRODUCTS",
            payload: resp.data.data,
        };
        dispatch(action);
    }, []);

    

    const getProductAction = useCallback(async (id) => {
        const resp = await getProductService(id);
                
        
        const action = {
            type: "GET_PRODUCT",
            payload: resp.data.data,
        };
        dispatch(action);
    }, []);

    const addCartProduct = async (id) => {
        const resp = await getProductService(id);
        console.log(resp.data.data);

        const action = {
            type: "ADD_CART_PRODUCT",
            payload: resp.data.data,
        };
        dispatch(action);
    };

    const deleteCartProduct = async (id) => {
        dispatch({
          type: "DELETE_CART_PRODUCT",
          payload: id,
        });
      };

  return (
    <ProductsContext.Provider 
    value={{ 
        products: globalState.products, 
        getProductsAction, 
        getProductAction,
        addCartProduct,
        deleteCartProduct,
        product: globalState.product,
        cart: globalState.cart,
        }}>
        {children}
    </ProductsContext.Provider>
  );
};

ProductsState.propTypes = {
    children: PropTypes.node,
};

export default ProductsState;