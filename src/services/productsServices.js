import axios from "axios";

const URL = "https://ecommerce-acme-backend.onrender.com/products";
//const URL = "http://localhost:4000/products";

const getProductsService = async () => {
    const resp = await axios.get(`${URL}`);
    return resp;
};

const getProductService = async (id) => {
    //const resp = await axios.get(
   //      "https://ecommerce-acme-backend.onrender.com/products/664007e9f4ce697eef1c45d9");
    // return resp;
    const resp = await axios.get(
         `${URL}/${id}`);
     return resp;

};

export { getProductsService, getProductService };