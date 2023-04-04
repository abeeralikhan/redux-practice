import { legacy_createStore as createStore } from "redux";

const initialState = {
  count: 0,
};

const rootReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") return { ...state, count: state.count + 1 };
  if (action.type === "DECREMENT") return { ...state, count: state.count - 1 };
  if (action.type === "RESET") return { ...initialState };
  if (action.type === "INCREMENT_BY_COUNT")
    return { ...state, count: state.count + action.payload };
  return state;
};

const store = createStore(rootReducer);

export default store;
