import AppRouter from "./router/AppRouter";
import ProductsState from "./context/ProductsState";
import AuthState from "./context/authState";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const App = () => {
  return (

    <AuthState>
    <ProductsState>
      <AppRouter />
    </ProductsState>
    </AuthState>
  );
};

export default App;