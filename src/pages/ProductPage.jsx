import { useEffect, useState } from "react";
import XViewProductsCatalog from "../components/catalogs/XViewProductsCatalog";
import AddToCartCatalog from "../components/catalogs/XAddToCartCatalog";
import XTab from "../components/tabs/XTab";
import XDescriptionCatalog from "../components/catalogs/XDescriptionCatalog";
import XInformationCatalog from "../components/catalogs/XInformationCatalog";
import XReviewsCatalog from "../components/catalogs/XReviewsCatalog";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

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
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [aboutTab, setAboutTab] = useState("description");
  const handleTabChange = (activeTab) => {
    setAboutTab(activeTab);
  };

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "product", productId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setProduct(data);
      } else {
        setProduct(null);
      }
      setLoading(false);
    };

    fetchData();
  }, [productId]);

  return (
    <div>
      {loading ? (
        <p>Fetching...</p>
      ) : product ? (
        <>
          <div className="grid grid-cols-1 gap-10 md:gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <XViewProductsCatalog
                images={[...product.coverUrl, ...product.previewUrl]}
              />
            </div>
            <div className="order-1 md:order-2">
              <AddToCartCatalog title={product.name} price={product.price} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10"></div>
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
              <XDescriptionCatalog description={product.description} />
            )}
            {aboutTab === "information" && (
              <XInformationCatalog information={aboutProduct.information} />
            )}
            {aboutTab === "reviews" && (
              <XReviewsCatalog reviews={aboutProduct.reviews} />
            )}
          </div>
        </>
      ) : (
        <p>No Data!!!</p>
      )}
    </div>
  );
};

export default ProductPage;
