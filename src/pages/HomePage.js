import React from "react";
import XCategoryCard from "../components/card/XCategoryCard";
import XProductCard from "../components/card/XProductCard";

const categories = [
  {
    title: "Women",
    description: "Spring 2023",
    cover:
      "https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp",
  },
  {
    title: "Men ",
    description: "Spring 2024",
    cover:
      "https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp",
  },
  {
    title: "Accesseries",
    description: "New Trend",
    cover:
      "https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg.webp",
  },
];

const products = [
  {
    cover:
      "https://preview.colorlib.com/theme/cozastore/images/product-03.jpg.webp",
    title: "Esprit Ruffle Shirt",
    price: 16.64,
  },
  {
    cover:
      "https://preview.colorlib.com/theme/cozastore/images/product-02.jpg.webp",
    title: "Esprit Ruffle Shirt",
    price: 16.64,
  },
  {
    cover:
      "https://preview.colorlib.com/theme/cozastore/images/product-06.jpg.webp",
    title: "Esprit Ruffle Shirt",
    price: 16.64,
  },
  {
    cover: "https://preview.colorlib.com/theme/cozastore/images/product-01.jpg",
    title: "Esprit Ruffle Shirt",
    price: 16.64,
  },
  {
    cover:
      "https://preview.colorlib.com/theme/cozastore/images/product-08.jpg.webp",
    title: "Esprit Ruffle Shirt",
    price: 16.64,
  },
  {
    cover:
      "https://preview.colorlib.com/theme/cozastore/images/product-15.jpg.webp",
    title: "Esprit Ruffle Shirt",
    price: 16.64,
  },
  {
    cover:
      "https://preview.colorlib.com/theme/cozastore/images/product-16.jpg.webp",
    title: "Esprit Ruffle Shirt",
    price: 16.64,
  },
  {
    cover:
      "https://preview.colorlib.com/theme/cozastore/images/product-09.jpg.webp",
    title: "Esprit Ruffle Shirt",
    price: 16.64,
  },
  {
    cover:
      "https://preview.colorlib.com/theme/cozastore/images/product-10.jpg.webp",
    title: "Esprit Ruffle Shirt",
    price: 16.64,
  },
  {
    cover:
      "https://preview.colorlib.com/theme/cozastore/images/product-12.jpg.webp",
    title: "Esprit Ruffle Shirt",
    price: 16.64,
  },
];

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
      <div className="grid grid-cols-1 gap-5 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
