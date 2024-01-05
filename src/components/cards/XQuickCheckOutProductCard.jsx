import XCartProductCard from "./XCartProductCard";

const XQuickCheckOutProductCard = () => {
  return (
    <div className="flex flex-1">
      <XCartProductCard />
      <div className="flex flex-col gap-4 mt-2 ml-5">
        <p className="text-sm text-gray-600">White Shirt Pleat</p>
        <p className="text-sm text-gray-500"> 1 x $39.0</p>
      </div>
    </div>
  );
};

export default XQuickCheckOutProductCard;
