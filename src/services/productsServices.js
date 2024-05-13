import axios from "axios"

const getProductsService = async () => {
    const resp = await axios.get("https://ecommerce-acme-backend.onrender.com/products");
    return resp;
};

export { getProductsService };