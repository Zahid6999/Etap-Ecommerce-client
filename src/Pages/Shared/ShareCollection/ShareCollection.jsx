import React from "react";

import img1 from "../../../assets/CollectionImg/Outfit (1).png";
import img2 from "../../../assets/CollectionImg/Outfit.png";

const ShareCollection = () => {
  return (
    <div>
      <figure className="flex flex-wrap justify-center gap-4">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </figure>
    </div>
  );
};

export default ShareCollection;
