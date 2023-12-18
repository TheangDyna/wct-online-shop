import React from "react";
// import { RxCross2 } from "react-icons/rx";

function Product() {
  return (
    <div>
      <div className="relative w-20 h-20 group">
        <img
          alt=""
          className="object-cover w-full h-full"
          src="https://cdn.mukama.com/31812-large_default/formal-friday-ultrafine-merino-t-shirt-black.jpg"
        />
        <div className="absolute top-0 flex w-full h-full bg-black opacity-0 group-hover:opacity-30">
          {/* <div className='flex items-center justify-center w-full h-full text-2xl text-white '> <RxCross2 /></div> */}
        </div>
        <div className="absolute items-center invisible text-2xl text-white -translate-x-3 -translate-y-2 group left-1/2 top-1/2 group-hover:visible ">
          {/* <RxCross2 /> */}
        </div>
      </div>
    </div>
  );
}

export default Product;
