const countryReducer = (state, action) => {
  if (action.type === "LOADCOUNTRIES") {
    return { ...state, countries: action.payload };
  }

  return state;
};

export default countryReducer;
