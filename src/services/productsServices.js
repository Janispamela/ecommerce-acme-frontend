import axios from "axios"

const getProductsService = async () => {
    const resp = await axios.get("http://localhost:4000/products");
    return resp;
};

export { getProductsService };