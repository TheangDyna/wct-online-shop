import React, { useState } from "react";
import { useParams } from "react-router-dom";
import XViewProductsCatalog from "../components/catalog/XViewProductsCatalog";
import AddToCartCatalog from "../components/catalog/XAddToCartCatalog";
import XTab from "../components/tab/XTab";
import XDescriptionCatalog from "../components/catalog/XDescriptionCatalog";
import XInformationCatalog from "../components/catalog/XInformationCatalog";
import XReviewsCatalog from "../components/catalog/XReviewsCatalog";

const images = [
  "https://preview.colorlib.com/theme/cozastore/images/product-detail-01.jpg.webp",
  "https://preview.colorlib.com/theme/cozastore/images/product-detail-02.jpg.webp",
  "https://preview.colorlib.com/theme/cozastore/images/product-detail-03.jpg.webp",
];

const aboutProducts = [
  {
    title: "Description",
    value: "description",
  },
  {
    title: "Additional information",
    value: "information",
  },
  {
    title: "Reviews",
    value: "reviews",
  },
];

const aboutProduct = {
  description:
    "Aenean sit amet gravida nisi. Nam fermentum est felis, quis feugiat nunc fringilla sit amet. Ut in blandit ipsum. Quisque luctus dui at ante aliquet, in hendrerit lectus interdum. Morbi elementum sapien rhoncus pretium maximus. Nulla lectus enim, cursus et elementum sed, sodales vitae eros. Ut ex quam, porta consequat interdum in, faucibus eu velit. Quisque rhoncus ex ac libero varius molestie. Aenean tempor sit amet orci nec iaculis. Cras sit amet nulla libero. Curabitur dignissim, nunc nec laoreet consequat, purus nunc porta lacus, vel efficitur tellus augue in ipsum. Cras in arcu sed metus rutrum iaculis. Nulla non tempor erat. Duis in egestas nunc.",
  information: {
    Weight: 0.79,
    dimensions: [110, 33, 100],

    materials: "60% cotton",
    color: ["Black", "Blue", "Grey", "Green", "Red", "White"],

    size: ["XL", "L", "M", "S"],
  },
  reviews: [{}],
};

const ProductPage = () => {
  const { productId } = useParams();
  const [aboutTab, setAboutTab] = useState("description");
  const handleTabChange = (activeTab) => {
    setAboutTab(activeTab);
  };

  //   useEffect(() => {
  //     Perform data fetching based on productId
  //   }, [productId]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-10">
        <XViewProductsCatalog images={images} />
        <AddToCartCatalog />
      </div>
      <div className="h-20" />
      <div className="border px-[125px] py-10">
        <div className="flex justify-center">
          <XTab
            headers={aboutProducts}
            initialActive="description"
            onTabChange={handleTabChange}
          />
        </div>
        <div className="h-10" />
        {aboutTab === "description" && (
          <XDescriptionCatalog description={aboutProduct.description} />
        )}
        {aboutTab === "information" && (
          <XInformationCatalog information={aboutProduct.information} />
        )}
        {aboutTab === "reviews" && (
          <XReviewsCatalog reviews={aboutProduct.reviews} />
        )}
      </div>
    </div>
  );
};

export default ProductPage;
