import React from "react";
import TestButton from "../components/TestButton";
import CategoryCard from "../components/CategoryCard";
import Navbar from "../components/Navbar";

const App = () => {
  return (
    <div className="">
      <h1>Home Page</h1>
      <TestButton></TestButton>
      <Navbar></Navbar>
      <CategoryCard></CategoryCard>
    </div>
  );
};

export default App;
