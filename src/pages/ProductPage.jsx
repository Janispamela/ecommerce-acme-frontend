import { useEffect, useContext } from "react";
import ProductsContext from "../context/ProductsContext";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { product, getProductAction } = useContext(ProductsContext);

  const { id } =useParams();

  useEffect(() => {
    getProductAction(id);
  }, [getProductAction, id]);
  
  return (
    <main className="row">
      <article className="col">
        <div className="card mb-3" >
          <div className="row g-0">
            <div className="col-md-4">
              <img src={product.image} className="img-fluid rounded-start" alt={product.name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.name} </h5>
                <p className="card-text">
                {product.price}
                </p>
                <p className="card-text">
                {product.sku}
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                  Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

      </article>
    </main>
  )
}

export default ProductPage;