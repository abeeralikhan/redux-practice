import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";

const selectProductIds = (state) => {
  return state.productsSlice.products.map((product) => product.id);
};

const Products = () => {
  const productIds = useSelector(selectProductIds, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "products/LOAD_PRODUCT",
    });
  }, [dispatch]);

  if (!productIds.length) {
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
        {productIds.map((productId) => (
          <ProductItem key={productId} productId={productId} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
