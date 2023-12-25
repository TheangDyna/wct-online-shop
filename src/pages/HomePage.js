import React, { useState } from "react";
import XCategoryCard from "../components/cards/XCategoryCard";
import XProductCard from "../components/cards/XProductCard";
import XTab from "../components/tab/XTab";
import { categories } from "../constants/category";
import { productsData } from "../constants/product";
import { productCategories } from "../constants/filter";
import { AnimatePresence, motion } from "framer-motion";

const HomePage = () => {
  const [products, setProducts] = useState(productsData);
  const handleTabChange = (activeTab) => {
    if (activeTab === "all") {
      setProducts(productsData);
    } else {
      setProducts(productsData.filter((item) => item.category === activeTab));
    }
  };

  return (
    <div>
      <div className="h-20" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((items, index) => (
          <XCategoryCard
            key={index}
            title={items.title}
            description={items.description}
            cover={items.cover}
          />
        ))}
      </div>
      <div className="h-20" />
      <p className="text-4xl font-bold">PRODUCT OVERVIEW</p>
      <div className="h-10" />
      <XTab
        headers={productCategories}
        initialActive="all"
        onTabChange={handleTabChange}
      />
      <div className="h-20" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence>
          {products.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full"
              >
                <XProductCard
                  id={item.id}
                  cover={item.cover}
                  title={item.title}
                  price={item.price}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default HomePage;
