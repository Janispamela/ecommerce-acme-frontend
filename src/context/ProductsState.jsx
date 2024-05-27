import { useReducer, useCallback } from "react";
import ProductsContext from "./ProductsContext";
import ProductsReducer from "./ProductsReducer";
import PropTypes from "prop-types";
import { getProductsService, getProductService} from "../services/productsServices";

const initialState = {
    products: [],
    product: {},
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

  return (
    <ProductsContext.Provider 
    value={{ 
        products: globalState.products, 
        getProductsAction, 
        getProductAction,
        product: globalState.product,
        }}>
        {children}
    </ProductsContext.Provider>
  );
};

ProductsState.propTypes = {
    children: PropTypes.node,
};

export default ProductsState;