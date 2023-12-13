import React from "react";
import CategoryCard from "../components/CategoryCard";
import Navbar from "../components/Navbar";
// import ProductCard from "../components/ProductCard";
// import Test from "../components/Test";
import Card from "../components/Card";
import Main from "../components/quick card/Main";
import BodySlide from "../components/BodySlide";
import ViewCart from "../components/ViewCart";

const App = () => {
  const products = [
    {
      title: "Men",
      text: "Spring 2023",
      cover:
        "https://st4.depositphotos.com/6903990/31458/i/450/depositphotos_314585930-stock-photo-beauty-girl-long-shiny-wavy.jpg",
    },
    {
      title: "Girl",
      text: "Spring 2024",
      cover:
        "https://st4.depositphotos.com/6903990/31458/i/450/depositphotos_314585930-stock-photo-beauty-girl-long-shiny-wavy.jpg",
    },
    {
      title: "normal",
      text: "Spring 2025",
      cover:
        "https://st4.depositphotos.com/6903990/31458/i/450/depositphotos_314585930-stock-photo-beauty-girl-long-shiny-wavy.jpg",
    },
  ];
  return (
    <div className="">
      <h1>Home Page</h1>
      {/* <h1>Home Page</h1>
      <TestButton></TestButton> */}
      <Navbar></Navbar>
      <BodySlide/>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-4/5 m-auto gap-x-5 gap-y-5 ">
        {products.map((items, index) => (
          <CategoryCard
            title={items.title}
            text={items.text}
            cover={items.cover}
          />
        ))}
      </div>
      <Card />
    
      <Main />
      <ViewCart/>
    </div>
  );
};
export default App;
