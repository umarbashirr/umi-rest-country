import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <nav>
          <h1>Where from the country?</h1>
          <button>
            <i className="fas fa-moon"></i> <span>Dark Mode</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
