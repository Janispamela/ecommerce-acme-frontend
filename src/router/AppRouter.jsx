import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ProductsPage from "../pages/ProductsPage"
import ProductPage from "../pages/ProductPage"
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Navbar from "../components/Navbar"
import CartPage from "../pages/CartPage"

import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import ProfilePage from "../pages/ProfilePage";

const AppRouter = () => {

  const { renovarToken, user } = useContext(AuthContext);

  useEffect(() => {
    renovarToken();
  }, [renovarToken]);


  return (
    <BrowserRouter>
        <Navbar />
        <div className="container mt-5">
        <Routes>
          {/* Rutas publicas y privadas */}
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />

{
  user.user_name ? (
    <>

{/* Rutas privadas */}

    <Route path="/profile" element={<ProfilePage />} />
    </>
  ) : (
<>
{/* Rutas publicas*/}

<Route path="/login" element={<LoginPage />} />
<Route path="/register" element={<RegisterPage />} />

</>
  )
}
            
            
            
            

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        </div>
    </BrowserRouter>
  )
}

export default AppRouter