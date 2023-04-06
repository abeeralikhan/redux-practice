import React, { useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";

const ProductItem = ({ item, onFavorite, onCartAdd }) => {
  useEffect(() => {
    console.log("Product item changed: ", item.id);
  });
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {item.text}
      <div>
        <button
          onClick={() => onFavorite(item.id)}
          className="btn btn-secondary"
        >
          {item.isFavorite ? (
            <AiFillHeart size={24} color="red" />
          ) : (
            <AiOutlineHeart size={24} />
          )}
        </button>
        <button
          onClick={() => onCartAdd(item.id)}
          className="btn btn-secondary"
        >
          <IoIosAdd size={24} />
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
