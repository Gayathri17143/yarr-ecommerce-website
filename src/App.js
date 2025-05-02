import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Product from "./components/Details";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wishlist from "./components/Wishlist";
import NotFound from "./components/PageNotFound";
import Cart from "./components/Shopcart";
import Coupon from "./components/Coupon";
import Order from "./components/OrderHistory";
import Profilepage from "./components/Profilepage";
// import SearchResults from "./components/SearchResults";
import CardPayment from "./components/CardPayment";
import ShippingPage from "./components/ShippingPage";
// import ConfirmationPage from "./components/ConfirmationPage";
import StripePaymentPage from "./components/StripePaymentPage";
import { WishlistCartProvider } from "./components/WishlistCartContext";

export default function App() {
  return (
    <>
      <WishlistCartProvider>
        <Router>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Navbar />
            <div style={{ flex: 1 }}>
              {/* <Navbar /> */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coupon" element={<Coupon />} />
                <Route path="/product/:id" element={<Product />} />
                {/* <Route path="/search" element={<SearchResults />} /> */}
                {/* <Route path="/cart" element={<CartPage />} /> */}
                <Route path="/checkout/shipping" element={<ShippingPage />} />
                <Route
                  path="/checkout/payment"
                  element={<StripePaymentPage />}
                />
                <Route path="/checkout/cardpayment" element={<CardPayment />} />
                {/* <Route
                path="/checkout/confirmation"
                element={<ConfirmationPage />}
              /> */}
                <Route path="/profile" element={<Profilepage />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/shopcart" element={<Cart />} />
                <Route path="/yourorders" element={<Order />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              {/* <Footer /> */}
            </div>
            <Footer />
          </div>
        </Router>
      </WishlistCartProvider>
    </>
  );
}
