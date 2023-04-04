import { legacy_createStore as createStore } from "redux";
import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {
  products: [],
};

const PRODUCTS = [
  {
    id: uuidv4(),
    text: "Samsung Galaxy S23 Ultra",
    isFavorite: true,
    category: "Mobile",
    price: 3000,
  },
  {
    id: uuidv4(),
    text: "Macbook Pro M2",
    isFavorite: false,
    category: "Laptp",
    price: 4000,
  },
  {
    id: uuidv4(),
    text: "Denim Jeans",
    isFavorite: false,
    category: "Clothing",
    price: 400,
  },
];

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "products/LOAD_PRODUCT":
      return {
        ...state,
        products: [...PRODUCTS],
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);
export default store;
