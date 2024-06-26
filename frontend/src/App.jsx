import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// HomePage Option
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

// Componenet
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Assets
import bannerswomens from "./assets/bannerwomens.png";
import bannermens from "./assets/bannermens.jpg";
import bannerkids from "./assets/bannerkids.png";
import SignUp from "./pages/Signup.jsx";
import Transactions from "./pages/Transactions.jsx";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        {/* Tampilan Header dan Navbar */}
        <Header />
        <Navbar />
        {/* Route ke page lain  */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Categories */}
          <Route
            path="/tenda"
            element={<Category category={"Tenda"} banner={bannermens} />}
          />
          <Route
            path="/tas"
            element={<Category category={"Tas"} banner={bannerswomens} />}
          />
          <Route
            path="/memasak"
            element={<Category category={"Memasak"} banner={bannerkids} />}
          />
          <Route
            path="/aksesoris"
            element={<Category category={"Aksesories"} banner={bannerkids} />}
          />
          {/* Product */}
          <Route path="/product" element={<Product />} />
          {/* Product */}
          <Route path="/product/:id" element={<Product />} />
          {/* Login */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Transactions />} />
          {/* Add the Checkout route */}
        </Routes>
        {/* Tampilan Footer */}
        <Footer />
      </BrowserRouter>
    </main>
  );
}
