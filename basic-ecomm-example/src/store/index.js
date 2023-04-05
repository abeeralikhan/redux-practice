import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productsReducer from "./products";

const rootReducer = combineReducers({
  products: productsReducer,
});

// const composedEnhancer = compose(addLoggingOnDispatch);
// const middlewareEnhancer = applyMiddleware(logger, blockAction);

const store = createStore(rootReducer, composeWithDevTools());

export default store;
