import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productsReducer from "./products";
import { addLoggingOnDispatch } from "../add-ons/enhancers";
import { logger } from "../add-ons/middlewares";

const rootReducer = combineReducers({
  products: productsReducer,
});

const composedEnhancer = compose(addLoggingOnDispatch);
const middlewareEnhancer = applyMiddleware(logger);

const store = createStore(
  rootReducer,
  composeWithDevTools(composedEnhancer, middlewareEnhancer)
);

export default store;
