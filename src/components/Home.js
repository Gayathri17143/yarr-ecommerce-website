import MainCarousal from "../components/Bannercarousel";
import ImageGrid from "../components/ImageGrid";
import ProductPage from "../components/Productpage";
import Offer from "../components/Offer";
// import Product from "../components/Productpage1";
import Videos from "../components/Videos";
import ExclusiveOffer from "../components/ExclusiveOffer";
import Test from "../components/Testimonial";
import Blog from "../components/Blogs";
import Savings from "../components/TimeSavings";
import Feature from "../components/FeatureProducts";
import Service from "../components/Services.js";
import Chatbot from "./Chatbot.js";
// import { WishlistProvider } from "./WishlistContext";
import ProductList from "./ProductList";
// import Wishlist from "./Wishlist";
function Home() {
  return (
    // <WishlistProvider>
      <div className="App">
        <MainCarousal />
        <ImageGrid />
        <Savings />
        <ProductPage />
        <Feature />
        <Service />
        {/* <ProductList /> */}
        {/* <Wishlist /> */}
        <Test />
        <Chatbot />
        {/* <Product/> */}
        {/* <Offer /> */}
        {/* <Videos/> */}
        <ExclusiveOffer />

        {/* <Blog/> */}
      </div>
    // </WishlistProvider>
  );
}

export default Home;
