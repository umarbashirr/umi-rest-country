import React from "react";
import { useCountryContext } from "../context/CountryContext";
import styles from "./Countries.module.css";
import Country from "./Country";

const Countries = () => {
  const { countries } = useCountryContext();

  return (
    <section className="countries">
      <div className="container">
        <div className={styles["all-countries"]}>
          {countries.map((country) => (
            <Country country={country} key={country.numericCode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
