import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/CountryReducer";

export const countryContext = createContext();

const api = "https://restcountries.com/v2/all";

const initialState = {
  countries: [],
};

const CountryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUser = async (api) => {
    // dispatch({ type: "StartData" });
    try {
      const response = await fetch(api);
      const fetchedCountries = await response.json();
      console.log(fetchedCountries);
      dispatch({ type: "LOADCOUNTRIES", payload: fetchedCountries });
    } catch (error) {}
  };

  useEffect(() => {
    fetchUser(api);
  }, []);

  return (
    <countryContext.Provider value={{ ...state }}>
      {children}
    </countryContext.Provider>
  );
};

export default CountryContextProvider;

export const useCountryContext = () => {
  return useContext(countryContext);
};
