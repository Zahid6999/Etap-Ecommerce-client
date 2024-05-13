import ShareCollection from "../../Shared/ShareCollection/ShareCollection";
import UserReview from "../../Shared/UserReview/UserReview";
import BrandsSlide from "../BrandsSlide/BrandsSlide";
import Collection from "../Collection/Collection";
import Hero from "../Hero/Hero";
import SinceProducts from "../SinceProducts/SinceProducts";
import SpotLightCollection from "../SpotLightCollection/SpotLightCollection";

const Home = () => {
  return (
    <div>
      <Hero />
      <br />
      <br />
      <br />
      <Collection />
      <ShareCollection />
      <BrandsSlide />
      <SpotLightCollection />
      <SinceProducts />
      <UserReview />
    </div>
  );
};

export default Home;
