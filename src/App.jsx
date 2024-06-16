import AppRouter from "./router/AppRouter";
import ProductsState from "./context/ProductsState";
import AuthState from "./context/authState";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
//ASTz1CUs9rk8LNkGsfbiEGQXibX4aTi8I-RuCWbp5UKMe0m1WlkJfQku6H4uxcHPW8vzcAvASXqsqqcD

const App = () => {
  return (

    <AuthState>
      <PayPalScriptProvider options={{
            clientId:"ASTz1CUs9rk8LNkGsfbiEGQXibX4aTi8I-RuCWbp5UKMe0m1WlkJfQku6H4uxcHPW8vzcAvASXqsqqcD"}}>
        <ProductsState>
          <AppRouter />
        </ProductsState>
      </PayPalScriptProvider>
    </AuthState>
  );
};

export default App;