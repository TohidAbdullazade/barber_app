import React from "react";
import Hero from "./components/hero";
import Services from "./components/services";
import PriceList from "./components/priceList";
import Apointment from "./components/apointment";

const App = () => {
  return (
    <>
      <Hero />
      <Services />
      <PriceList />
      <Apointment />
    </>
  );
};

export default App;
