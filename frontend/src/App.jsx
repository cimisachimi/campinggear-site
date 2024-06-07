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
import Popular from "./components/Popular";

// Assets
import bannerswomens from "./assets/bannerwomens.png";
import bannermens from "./assets/bannermens.png";
import bannerkids from "./assets/bannerkids.png";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        {/* Tampilan Header dan Navbar */}
        <Header />
        <Navbar />
        <Popular />
        {/* Route ke page lain  */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Categories */}
          <Route
            path="/mens"
            element={<Category category={"mens"} banner={bannermens} />}
          />
          <Route
            path="/womens"
            element={<Category category={"women"} banner={bannerswomens} />}
          />
          <Route
            path="/kids"
            element={<Category category={"kids"} banner={bannerkids} />}
          />
          {/* Product */}
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />}></Route>
          {/* Login */}
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Cart />} />
        </Routes>
        {/* Tampilan Footer */}
        <Footer />
      </BrowserRouter>
    </main>
  );
}