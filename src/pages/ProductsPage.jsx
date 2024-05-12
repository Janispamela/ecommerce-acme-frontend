import { useEffect, useContext } from "react";


const ProductsPage = () => {
  
  useEffect(() => {
    console.log("ProductsPage - useEffect");
  }, []);

  return (
      <><header className="row">
      <article className="col">
        <h1>List of ACME products</h1>
      </article>
    </header><main className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        <article className="col">
          <div className="card h-100">
            <img
              src="https://i.pinimg.com/474x/1b/59/db/1b59db5138b95ff716e49fefe31c0a71.jpg"
              className="card-img-top"
              alt="Cactus costume" />
            <div className="card-body">
              <h5 className="card-title">Cactus costume</h5>
              <p className="card-text">100</p>
              <div>
                <button className="btn btn-secondary">View more...</button>
              </div>
            </div>
          </div>
        </article>
        <article className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a short card.</p>
            </div>
          </div>
        </article>
        <article className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </article>
        <article className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </article>
      </main></>
  )
}

export default ProductsPage