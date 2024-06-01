import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import WishlistHeader from "./WishlistHeader";
import WishlistTable from "./WishlistTable";
import Swal from "sweetalert2";

const WishlistsPage = () => {
  const loadedWishlist = useLoaderData();
  const [wishlist, setWishlist] = useState(loadedWishlist);

  const handleDeleteWishlist = (id) => {
    fetch(`http://localhost:5000/wishlist/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <WishlistHeader />
      <WishlistTable
        wishlist={wishlist}
        handleDeleteWishlist={handleDeleteWishlist}
      />
    </div>
  );
};

export default WishlistsPage;
