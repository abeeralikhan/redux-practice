import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productsReducer from "./productsSlice";
import favoritesReducer from "./favoritesSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["productsSlice"],
};

const rootReducer = combineReducers({
  productsSlice: productsReducer,
  favoritesSlice: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);

// const composedEnhancer = compose(addLoggingOnDispatch);
// const middlewareEnhancer = applyMiddleware(logger, blockAction);

// const localStorageItems = localStorage.getItem("APP_PRODUCTS");
// let preloadedState;

// if (localStorageItems) {
//   preloadedState = {
//     productsSlice: {
//       products: JSON.parse(localStorageItems),
//     },
//   };
// }
