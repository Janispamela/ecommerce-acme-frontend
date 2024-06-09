import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";
import PropTypes from "prop-types";
import { useCallback, useReducer } from "react";

import {
  loginService,
  registerService,
} from "../services/authServices";

const initialGlobalState = {
  user: null,
};

const AuthState = ({ children }) => {
  const [globalState, dispatch] = useReducer(authReducer, initialGlobalState);

  const iniciarSesion = async (form) => {
    try {
      const resp = await loginService(form);
      // console.log(resp.data.data);
      dispatch({
        type: "INICIAR_SESION",
        payload: resp.data.data,
      });

      localStorage.setItem("token", resp.data.token);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const registrarUsuario = async (form) => {
    try {
      const resp = await registerService(form);
      // console.log(resp.data.data);
      dispatch({
        type: "REGISTRAR_USUARIO",
        payload: resp.data.data,
      });
      localStorage.setItem("token", resp.data.token);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });

    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user: globalState.user,
        iniciarSesion,
        registrarUsuario,
         logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthState.propTypes = {
  children: PropTypes.node,
};

export default AuthState;