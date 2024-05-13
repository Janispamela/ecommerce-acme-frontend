import { useEffect, useContext } from "react";
import ProductsContext from "../context/ProductsContext";

const ProductsPage = () => {
  const { products, getProductsAction } = useContext(ProductsContext);

  useEffect(() => {
    getProductsAction();
  }, [getProductsAction]);

  return (
      <>
      <header className="row">
        <article className="col">
          <h1>List of ACME products</h1>
        </article>
      </header>
      <main className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {
          products.map((product) => (
            <article key={product.id} className="col">
          <div className="card h-100">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name} 
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.price}</p>
              <div>
                <button className="btn btn-secondary">View more...</button>
              </div>
            </div>
          </div>
        </article>
          ))
        }
      </main></>
  )
}

export default ProductsPage