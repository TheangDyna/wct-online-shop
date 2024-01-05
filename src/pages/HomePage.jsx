import XCategoryCard from "../components/cards/XCategoryCard";
import XProductListingCatalog from "../components/catalogs/XProductListingCatalog";
import { categories } from "../constants/category";

const HomePage = () => {
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
      <XProductListingCatalog />
    </div>
  );
};
export default HomePage;
