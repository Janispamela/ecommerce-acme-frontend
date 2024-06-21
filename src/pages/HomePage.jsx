import "../styles/cardsHomePage.css"; // Importar estilos necesarios
import "../styles/footerHomePage.css"; // Importar estilos necesarios

const HomePage = () => {
  return (
    <>
      <header className="row mb-4">
        <article className="col">
          <h1>Welcome to "The ACME speed shop"</h1>
        </article>
      </header>
 
      <main className="row">
        <article className="col">

              <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://fringefocus.com/cdn/shop/products/DeskofMrCoyote_FringeFocus_Regular_1024x1024.png?v=1500851604" className="d-block w-100" alt="Carousel" />
                  </div>
                  
                </div>

              </div>




          {/* Tarjetas de productos destacados */}
          <div className="card mb-5 card-section" style={{ border: 'none', boxShadow: 'none' }}>
            <div className="card-body">
              <h5 className="card-title">Featured products</h5>
            </div>
 
            <div className="row mb-5 justify-content-center"> {/* Espacio entre las tarjetas */}
              <div className="col-sm-3 mb-3 mb-sm-0">
                <div className="card" style={{ border: 'none', boxShadow: 'none' }}>
                  <img src="https://i.pinimg.com/originals/58/e6/8a/58e68a5db418d7b1caa7bef6befd9d4e.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">ACME Blueprints</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Learn More...</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card" style={{ border: 'none', boxShadow: 'none' }}>
                  <img src="https://i.pinimg.com/originals/0b/e8/1a/0be81ab8c24827edb35fe8263c896eb3.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Helicopter</h5>
                    <p className="card-text">"Look ma, no rush hour!" - Fly above the desert with our helicopter.</p>
                    <a href="#" className="btn btn-primary">Learn More...</a>
                  </div>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="card" style={{ border: 'none', boxShadow: 'none' }}>
                  <img src="https://i.pinimg.com/564x/33/0b/55/330b5550bb1d7b23f520619caea1ee25.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Incredible Prices</h5>
                    <p className="card-text">Explore our diverse range of products!.</p>
                    <a href="#" className="btn btn-primary">View All Products</a>
                  </div>
                </div>
              </div>

            </div>
 
            {/* Tarjetas de ofertas */}
            <div className="card text-center mb-5 card-section"> {/* Espacio entre las tarjetas */}
              <div className="card-header">
                
              </div>
              <div className="card-body">
                <h5 className="card-title">Be first to see new products and deals!</h5>
                <p className="card-text">Be among the first to access new limited products. Join our Acme community of over 10,000 members by registering today and receive a 10% discount on your first purchase.</p>
                <a href="#" className="btn btn-primary">Register</a>
              </div>
              <div className="card-footer text-body-secondary">
                
              </div>
            </div>
 
            {/* Tarjetas adicionales */}
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-4 card-section"> {/* Espacio entre las tarjetas */}
              <div className="col"> 
                <div className="card h-100" style={{ border: 'none' }}>
                  <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg" className="custom-card-image" alt="Payment" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Choose how to pay</h5>
                    <p className="card-text">With PayPal, pay with credit card, or debit card.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100" style={{ border: 'none' }}>
                  <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg" className="custom-card-image" alt="Card 2" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Free shipping from $299</h5>
                    <p className="card-text">By registering with us, you get free shipping on our products.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100" style={{ border: 'none' }}>
                  <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg" className="custom-card-image" alt="Card 3" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Security, from start to finish</h5>
                    <p className="card-text">Don't like it? Return it!, there's nothing you can't do because you're always protected.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="footer text-center footer-section"> {/* Espacio sobre el footer */}
        <div className="container">
          <span className="text-muted">© 2024 The ACME Speed Shop. All rights reserved. This is a fictional landing page for academic purposes.</span>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
