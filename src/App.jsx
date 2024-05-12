import AppRouter from "./router/AppRouter";
import ProductsState from "./context/ProductsState";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const App = () => {
  return (
    <ProductsState>
      <AppRouter />
    </ProductsState>
  );
};

export default App;