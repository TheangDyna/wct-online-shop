import React from "react";

const ProductCard = () => {
  return (
    <div class="card w-96 bg-red-200 shadow-xl">
      <figure>
        <img
          src="https://images-cdn.ubuy.co.in/633be6c3c1aef32ecb70e076-light-led-kids-shoes-luminous-sneakers.jpg"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
