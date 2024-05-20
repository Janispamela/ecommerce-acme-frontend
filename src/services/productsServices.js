import axios from "axios"

const getProductsService = async () => {
    const resp = await axios.get("https://ecommerce-acme-backend.onrender.com/products");
    return resp;
};

const getProductService = async (id) => {
    //const resp = await axios.get(
    //     `https://ecommerce-acme-backend.onrender.com/products/${id}`);
    // return resp;
    const resp = await axios.get(
         `http://localhost:4000/products/${id}`);
     return resp;

};

export { getProductsService, getProductService };