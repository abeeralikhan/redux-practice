import { legacy_createStore as createStore } from "redux";

const initialState = {
  count: 0,
};

const rootReducer = (state = initialState, action) => {
  return state;
};

const store = createStore(rootReducer);

export default store;
