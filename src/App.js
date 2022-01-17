import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Screens/Home";
import SingleCountry from "./Screens/singlecountry";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<SingleCountry />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
