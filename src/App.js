import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Product from "./components/Details";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wishlist from "./components/Wishlist"
import Login from "./components/Login"
import Cart from "./components/Shopcart"
export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/product" element={<Product />}></Route>
            <Route exact path="/wishlist" element={<Wishlist />}></Route>
            <Route exact path="/shopcart" element={<Cart />}></Route>
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}
