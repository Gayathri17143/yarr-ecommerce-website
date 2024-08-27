
import MainCarousal from "../components/Bannercarousel";
import ImageGrid from "../components/ImageGrid";
import ProductPage from "../components/Productpage";
import Offer from "../components/Offer";
import Product from "../components/Productpage1";
import Videos from "../components/Videos";
import ExclusiveOffer from "../components/ExclusiveOffer";
import Test from "../components/Testimonial"
import Blog from "../components/Blogs"

 
function Home() {
  return (
    <div className="App">
     
      <MainCarousal />
      <ImageGrid />
      <ProductPage />
      <Offer />
      <Product/>
      <Videos/>
      <ExclusiveOffer/>
      <Test/>
      <Blog/>
    
   
    </div>
  );
}

export default Home;
