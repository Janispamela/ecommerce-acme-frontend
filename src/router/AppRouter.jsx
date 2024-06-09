import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ProductsPage from "../pages/ProductsPage"
import ProductPage from "../pages/ProductPage"
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Navbar from "../components/Navbar"
import CartPage from "../pages/CartPage"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <div className="container mt-5">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        </div>
    </BrowserRouter>
  )
}

export default AppRouter