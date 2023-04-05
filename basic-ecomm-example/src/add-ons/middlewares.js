export const logger = (store) => (next) => (action) => {
  console.log("Dispatching an action", action.type);
  const result = next(action);
  console.log("Next state is", store.getState());
  return result;
};
