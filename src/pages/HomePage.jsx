import "../styles/styles-acmeproductimg.css";

const HomePage = () => {
  return (
   <>
      <header className="row">
        <article className="col">
          <h1>Welcome to ACME Corporation ecommerce</h1>
        </article>
      </header>
      <main className="row">
        <article className="col">
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Simplify Your Life with ACME Corporation products</h5>
            <p className="card-text"> </p>
            <p className="card-text"><small className="text-body-secondary"> </small></p>
          </div>
          <img src="https://fringefocus.com/cdn/shop/products/ACMECorporationPoster_1000x1500_FringeFocus_1000x.jpg?v=1500952797" className="card-img-bottom acme-product-img" alt="ACME products" />
        </div>
        </article>
      </main>
    </>
  
  )
}

export default HomePage;