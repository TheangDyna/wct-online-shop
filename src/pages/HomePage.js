import React from "react";
import XCategoryCard from "../components/cards/XCategoryCard";
import XProductCard from "../components/cards/XProductCard";
import { categories } from "../constants/category";
import { products } from "../constants/product";

const HomePage = () => {
  return (
    <div>
      <div className="h-20" />
      <div className="grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2 lg:grid-cols-3">
        {categories.map((items, index) => (
          <XCategoryCard
            key={index}
            title={items.title}
            description={items.description}
            cover={items.cover}
          />
        ))}
      </div>
      <div className="h-10" />
      <div className="grid grid-cols-1 gap-5 isolate justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item, index) => {
          return (
            <XProductCard
              key={index}
              cover={item.cover}
              title={item.title}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};
export default HomePage;
