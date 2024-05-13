import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ProductsPage from "../pages/ProductsPage"
import ProductPage from "../pages/ProductPage"
import Navbar from "../components/Navbar"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <div className="container mt-5">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductPage />} />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        </div>
    </BrowserRouter>
  )
}

export default AppRouter