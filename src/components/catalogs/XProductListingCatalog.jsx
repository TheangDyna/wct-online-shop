import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import XTab from "../tabs/XTab";
import { productCategories } from "../../constants/filter";
import XProductCard from "../cards/XProductCard";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../services/firebase";

const XProductListingCatalog = () => {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState([]);
  const [product, setProduct] = useState(productData);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "product"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let itemsArr = [];
        querySnapshot.forEach((doc) => {
          itemsArr.push({ ...doc.data(), id: doc.id });
        });
        setProductData(itemsArr);
        setProduct(itemsArr);
        setLoading(false);
      });

      return () => unsubscribe();
    };

    fetchData();
  }, []);

  const handleTabChange = (activeTab) => {
    if (activeTab === "all") {
      setProduct(productData);
    } else {
      setProduct(productData.filter((item) => item.category === activeTab));
    }
  };
  return (
    <div>
      <XTab
        headers={[{ title: "All", value: "all" }, ...productCategories]}
        initialActive="all"
        onTabChange={handleTabChange}
      />
      <div className="h-20" />
      {loading ? (
        <p>Fetching...</p>
      ) : product.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence>
            {product.map((item) => {
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
                    cover={item.coverUrl}
                    preview={item.previewUrl}
                    title={item.name}
                    price={item.price}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      ) : (
        <p>No Data!!!</p>
      )}
    </div>
  );
};

export default XProductListingCatalog;
