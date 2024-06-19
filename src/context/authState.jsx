import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";
import PropTypes from "prop-types";
import { useCallback, useReducer } from "react";
import {
  loginService,
  registerService,
  renovarTokenService,
} from "../services/authServices";

const initialGlobalState = {
  user: {},
  message: "", // Estado para almacenar mensajes de error/success
};

const AuthState = ({ children }) => {
  const [globalState, dispatch] = useReducer(authReducer, initialGlobalState);

  const iniciarSesion = async (form) => {
    try {
      const resp = await loginService(form);
      dispatch({
        type: "INICIAR_SESION",
        payload: resp.data.data,
      });
    } catch (error) {
      console.error("Error en inicio de sesión:", error.response.data.msg);
      if (error.response.status !== 500) {
        dispatch({
          type: "SET_MESSAGE",
          payload: "Usuario o contraseña incorrectos", // Mensaje para este error específico
        });
      } else {
        console.error("Error en el servidor:", error); // Imprimir en consola solo en caso de error 500
      }
    }
  };

  const registrarUsuario = async (form) => {
    try {
      const resp = await registerService(form);
      dispatch({
        type: "REGISTRAR_USUARIO",
        payload: resp.data.data,
      });
      dispatch({
        type: "SET_MESSAGE",
        payload: "Usuario registrado", // Mensaje para este éxito específico
      });
    } catch (error) {
      console.error("Error en registro de usuario:", error.response.data.msg);
      if (error.response.status !== 500) {
        dispatch({
          type: "SET_MESSAGE",
          payload: "Este usuario ya está registrado", // Mensaje para este error específico
        });
      } else {
        console.error("Error en el servidor:", error); // Imprimir en consola solo en caso de error 500
      }
    }
  };

  const renovarToken = useCallback(async () => {
    try {
      const resp = await renovarTokenService();
      dispatch({
        type: "INICIAR_SESION",
        payload: resp.data.data,
      });
    } catch (error) {
      console.error("Error al renovar token:", error.response.data.msg);
      if (error.response.status !== 500) {
        dispatch({
          type: "SET_MESSAGE",
          payload: "Error en el servidor", // Mensaje para este error específico
        });
      } else {
        console.error("Error en el servidor:", error); // Imprimir en consola solo en caso de error 500
      }
    }
  }, []);

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
        message: globalState.message, // Exponer el estado de mensaje al contexto
        iniciarSesion,
        registrarUsuario,
        renovarToken,
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
