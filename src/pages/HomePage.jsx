import "../styles/carrouselHomePage.css"
import "../styles/footerHomePage.css"

const HomePage = () => {
  return (
    <>
      <header className="row">
        <article className="col">
          <h1>Welcome to "The ACME speed shop"</h1>
        </article>
      </header>
 
      <main className="row">
        <article className="col">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Featured products</h5>
            </div>
 
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>
 
              <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="card-image">
                  <img src="https://i.pinimg.com/originals/0b/e8/1a/0be81ab8c24827edb35fe8263c896eb3.png" className="d-block w-100" alt="Helicopter" />
                  </div> 
                  <div className="carousel-caption d-none d-md-block text-end">
                    <h5>Helicopter</h5>
                    <p>"Look ma, no rush hour!" - Fly above the desert with our helicopter.</p>
                    <button className="btn btn-primary">Shop Now</button>
                  </div>
                </div>
                <div className="carousel-item">
                <div className="card-image">
                  <img src="https://i.pinimg.com/originals/58/e6/8a/58e68a5db418d7b1caa7bef6befd9d4e.jpg" className="d-block w-100" alt="ACME Blueprints" />
                  </div> 
                  <div className="carousel-caption d-none d-md-block left">
                    <h5>ACME Blueprints</h5>
                    <p>Plan every detail of your chase with our expertly crafted blueprints!</p>
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
                <div className="carousel-item">
                <div className="card-image">
                  <img src="https://i.pinimg.com/564x/33/0b/55/330b5550bb1d7b23f520619caea1ee25.jpg" className="d-block w-100" alt="Different products" />
                  </div> 
                  <div className="carousel-caption d-none d-md-block text-end">
                    <h5>Incredible Prices & Free Shipping</h5>
                    <p>Explore our diverse range of products!</p>
                    <button className="btn btn-primary">View All Products</button>
                  </div>
                </div>
              </div>
 
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4">
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


        </article>
      </main>
    </>
  );
};
 
export default HomePage;
