const defaultState = [];

const favoritesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "favorites/ADD_FAVORITE":
      const itemId = state.includes(action.payload);
      if (itemId) {
        // Remove from favorites
        return state.filter((item) => item !== action.payload);
      }
      // Add to favorites
      return [...state, action.payload];
    default:
      return state;
  }
};

export default favoritesReducer;
