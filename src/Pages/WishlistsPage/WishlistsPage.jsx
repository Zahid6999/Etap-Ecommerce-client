import React from "react";
import { useLoaderData } from "react-router-dom";
import WishlistHeader from "./WishlistHeader";
import WishlistTable from "./WishlistTable";

const WishlistsPage = () => {
  const wishlist = useLoaderData();

  return (
    <div>
      <WishlistHeader />
      <WishlistTable wishlist={wishlist} />
    </div>
  );
};

export default WishlistsPage;
