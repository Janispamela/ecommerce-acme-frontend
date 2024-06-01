import axios from "axios";

const loginService = async (form) => {

//const form = {
//  user_name: "jsmith",
//  password: "password123",
//};

    const resp = await axios.post(
        "https://ecommerce-acme-backend.onrender.com/auth/iniciar_sesion",
        form
    );

 return resp;
};

export { loginService };