import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector(({ productsSlice }) => productsSlice.products);
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
    dispatch({
      type: "products/LOAD_PRODUCT",
    });
  }, [dispatch]);

  if (products.length) {
    localStorage.setItem("APP_PRODUCTS", JSON.stringify(products));
  }

  if (!products.length) {
    return (
      <div className="alert alert-dismissable alert-info">
        <strong>Alert!</strong> Please start adding products
        <Link to="/new"> from here</Link>
      </div>
    );
  }

  return (
    <div>
      <ul className="list-group">
        {products.map((prod) => (
          <ProductItem
            key={prod.id}
            item={prod}
            onFavorite={addFavorite}
            onCartAdd={addToCart}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
