import ShareCollection from "../../Shared/ShareCollection/ShareCollection";
import BrandsSlide from "../BrandsSlide/BrandsSlide";
import Collection from "../Collection/Collection";
import Hero from "../Hero/Hero";
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
    </div>
  );
};

export default Home;
