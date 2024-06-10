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

const registerService = async (form) => {

 
        const resp = await axios.post(
            "https://ecommerce-acme-backend.onrender.com/auth/registrar_usuario",
            form
        );
    
     return resp;
    };

    const renovarTokenService = async () => {
        const resp = await axios.get(
          "https://ecommerce-acme-backend.onrender.com/auth/validar_usuario",
          {
            headers: {
              "x-token": localStorage.getItem("token"),
            },
          }
        );
      
        return resp;
      };


export { loginService, registerService, renovarTokenService };