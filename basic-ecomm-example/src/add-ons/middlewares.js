export const logger = (store) => (next) => (action) => {
  console.log("Dispatching an action", action.type);
  const result = next(action);
  console.log("Next state is", store.getState());
  return result;
};

export const blockAction = (store) => (next) => (action) => {
  console.log("Hitting the blockAction middleware");

  if (action.type === "products/BOXING_DAY_OFFERS") {
    return;
  }
  next(action);
};
