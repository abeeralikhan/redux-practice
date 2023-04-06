import { v4 as uuidv4 } from "uuid";

const defaultState = {
  products: [],
};

const productsReducer = (state = defaultState, action) => {
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
    case "favorites/ADD_FAVORITE":
      return {
        ...state,
        products: state.products.map((item) => {
          if (action.payload !== item.id) return item;
          return { ...item, isFavorite: !item.isFavorite };
        }),
      };
    default:
      return state;
  }
};

export default productsReducer;
