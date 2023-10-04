import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";

const Homepage = () => {
  console.log('inside')
  return (
    <>
      <Banner />
      <CoinsTable />
    </>
  );
};

export default Homepage;
