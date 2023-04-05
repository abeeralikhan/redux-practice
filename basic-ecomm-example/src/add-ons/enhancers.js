export const addLoggingOnDispatch = (createStore) => {
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers);
    const newDispatch = (action) => {
      const result = store.dispatch(action);
      console.log(`<< ${action.type} >> has been triggered`);
      return result;
    };

    return {
      ...store,
      dispatch: newDispatch,
    };
  };
};
