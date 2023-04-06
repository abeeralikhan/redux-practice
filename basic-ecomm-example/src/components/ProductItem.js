import React, { useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

const selectProductById = (state, id) => {
  return state.productsSlice.products.find((product) => product.id === id);
};

const ProductItem = ({ productId }) => {
  const item = useSelector((state) => selectProductById(state, productId));
  const dispatch = useDispatch();

  const addFavorite = (id) => {
    dispatch({
      type: "favorites/ADD_FAVORITE",
      payload: id,
    });
  };
  const addToCart = (id) => {
    console.log("Adding product to cart", id);
  };

  useEffect(() => {
    console.log("Product item changed: ", item.id);
  });

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {item.text}
      <div>
        <button
          onClick={() => addFavorite(item.id)}
          className="btn btn-secondary"
        >
          {item.isFavorite ? (
            <AiFillHeart size={24} color="red" />
          ) : (
            <AiOutlineHeart size={24} />
          )}
        </button>
        <button
          onClick={() => addToCart(item.id)}
          className="btn btn-secondary"
        >
          <IoIosAdd size={24} />
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
