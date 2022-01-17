import React from "react";
import { Link } from "react-router-dom";
import styles from "./Country.module.css";

const Country = ({ country }) => {
  const { name, population, region, capital, flags } = country;
  return (
    <article className={styles.country}>
      <Link className={styles["img-container"]} to={`/${name}`}>
        <img src={flags.svg} alt={name} />
      </Link>
      <header>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.population}>
          <span>Population: </span>
          {population}
        </p>
        <p className={styles.region}>
          <span>Region: </span>
          {region}
        </p>
        <p className={styles.capital}>
          <span>Capital: </span>
          {capital}
        </p>
      </header>
    </article>
  );
};

export default Country;
