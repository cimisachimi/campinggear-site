import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Navbar";

// HomePage Option
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

import Breadcrumb from "./components/Breadcrumb";
import Hero from "./components/Hero";
import ProductList from "./components/Productlist";
import BrandPartner from "./components/Brand";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        {/* Tampilan Header dan Navbar */}
        <Header />
        <Navbar />

        {/* Breadcrump Component */}
        <Breadcrumb />

        <Home />

        <ProductList />
        <BrandPartner />

        {/* Route ke page lain  */}
        <Routes>
          <Route path="/" elements={<Home />} />

          {/* Categories */}
          <Route path="/OutdoorGear" elements={<Category />} />
          <Route path="/ClothesAndAccesories" elements={<Category />} />
          <Route path="/Pakaian" elements={<Category />} />

          {/* Product */}
          <Route path="/" elements={<Product />} />
          <Route path=":productId" element={<Product />}></Route>

          {/* Login */}
          <Route path="/" elements={<Login />} />
          <Route path="/" elements={<Cart />} />
        </Routes>

        {/* Tampilan Footer */}

        <Footer />
      </BrowserRouter>
    </main>
  );
}
