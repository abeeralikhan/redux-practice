import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";

const Products = () => {
  // const [products] = useState([]);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const addFavorite = (id) => {
    console.log("Adding product to favorite", id);
  };
  const addToCart = (id) => {
    console.log("Adding product to cart", id);
  };

  useEffect(() => {
    dispatch({
      type: "products/LOAD_PRODUCT",
    });
  }, [dispatch]);

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
