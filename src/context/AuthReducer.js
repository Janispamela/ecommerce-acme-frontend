const authReducer = (state, action) => {
  switch (action.type) {
    case "INICIAR_SESION":
      return {
        ...state,
        user: action.payload,
      };
    case "REGISTRAR_USUARIO":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_MESSAGE":
      return {
        ...state,
        message: action.payload, // Manejar el estado del mensaje
      };
    case "LOGOUT":
      return {
        ...state,
        user: {},
        message: "",
      };
    default:
      return state;
  }
};

export default authReducer;
