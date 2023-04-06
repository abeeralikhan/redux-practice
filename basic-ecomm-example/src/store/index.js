import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productsReducer from "./products";

const rootReducer = combineReducers({
  productsSlice: productsReducer,
});

// const composedEnhancer = compose(addLoggingOnDispatch);
// const middlewareEnhancer = applyMiddleware(logger, blockAction);

const localStorageItems = localStorage.getItem("APP_PRODUCTS");
let preloadedState;

if (localStorageItems) {
  preloadedState = {
    productsSlice: {
      products: JSON.parse(localStorageItems),
    },
  };
}

const store = createStore(rootReducer, preloadedState, composeWithDevTools());

export default store;
