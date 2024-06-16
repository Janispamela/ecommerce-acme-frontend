import { useContext, useState, useEffect } from "react";
import ProductsContext from "../context/ProductsContext";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import PayPalButton from "../components/PayPalButton";

const CartPage = () => {
  const { cart, deleteCartProduct } = useContext(ProductsContext);
  const { user } = useContext(AuthContext);

  const [total, setTotal] = useState(0);

  const handleDeleteCartProduct = (id) => {
    deleteCartProduct(id);
  };

  useEffect(() => {
    const totalAcumulado = cart.reduce(
      (acc, product) => acc + product.price,
      0
    );

    setTotal(totalAcumulado);
  }, [cart]);

  return (
    <>
    <main className="row">
      <article className="col">
        {cart.map((item) => (
          <div key={item.id} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={item.image}
                  className="img-fluid rounded-start"
                  alt={item.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {item.price}
                    </small>
                  </p>
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDeleteCartProduct(item.id)}
                    >
                      Remove from cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </article>
    </main>

    <section className="row pb-5">
        <article className="col">
          {cart.length > 0 ? (
            <>
              <p className="fs-1">Total</p>
              <p className="fs-2">{total}</p>
              {user.user_name ? (
                <>
                  {/* <PaypalCheckoutButton
                    currency="MXN"
                    amount={ammount}
                    showSpinner={false}
                  /> */}
                  <PayPalButton currency="MXN"
                    amount={total}
                    showSpinner={false}/>
                  {/*<button className="btn btn-success">Pay</button>*/}
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-success">
                    Please log in to continue
                  </Link>
                </>
              )}
            </>
          ) : (
            <>
              <p className="fs-1">Your cart is empty</p>
            </>
          )}
        </article>
      </section>

    </>
  );
};

export default CartPage;