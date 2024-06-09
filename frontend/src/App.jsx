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
import bannermens from "./assets/bannermens.png";
import bannerkids from "./assets/bannerkids.png";
import SignUp from "./pages/Signup.jsx";

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
            path="/new-product"
            element={<Category category={"men"} banner={bannermens} />}
          />
          <Route
            path="/outdoor-gear"
            element={<Category category={"women"} banner={bannerswomens} />}
          />
          <Route
            path="/wear"
            element={<Category category={"kid"} banner={bannerkids} />}
          />
          {/* Product */}
          <Route path="/product" element={<Product />} />

          <Route path=":productId" element={<Product />}></Route>
          {/* Login */}
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/" element={<Cart />} />
        </Routes>
        {/* Tampilan Footer */}
        <Footer />
      </BrowserRouter>
    </main>
  );
}
