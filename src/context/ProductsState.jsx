import { useReducer, useCallback } from "react";
import ProductsContext from "./ProductsContext";
import ProductsReducer from "./ProductsReducer";
import PropTypes from "prop-types";
import {getProductsService} from "../services/productsServices";

const initialState = {
    products: [],
}

const ProductsState = ({ children }) => {
    const [globalState, dispatch] = useReducer(ProductsReducer, initialState);

    const getProductsAction = useCallback(async () => {
        const resp = await getProductsService();
        //console.log(resp.data.data);
        const action = {
            type: "GET_PRODUCTS",
            payload: resp.data.data,
        }
        dispatch(action);
    }, []);


  return (
    <ProductsContext.Provider 
    value={{ products: globalState.products, getProductsAction }}>
        {children}
    </ProductsContext.Provider>
  );
};

ProductsState.propTypes = {
    children: PropTypes.node,
};

export default ProductsState;