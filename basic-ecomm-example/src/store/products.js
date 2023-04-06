import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {
  products: [],
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "products/LOAD_PRODUCT":
      return {
        ...state,
        products: !state.products.length ? [] : state.products,
      };
    case "product/ADD_PRODUCT":
      const { title, price, category } = action.payload;
      const product = {
        text: title,
        price,
        category,
        id: uuidv4(),
        isFavorite: false,
      };
      return {
        ...state,
        products: [...state.products, product],
      };
    default:
      return state;
  }
};

export default productsReducer;
