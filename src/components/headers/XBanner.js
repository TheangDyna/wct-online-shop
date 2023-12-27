import React from "react";

const XBanner = ({ title }) => {
  return (
    <section className="bg-[url('https://preview.colorlib.com/theme/cozastore/images/bg-01.jpg.webp')] w-full bg-center">
      <h1 className="w-full px-4 py-24 text-5xl font-bold text-center text-white">
        {title}
      </h1>
    </section>
  );
};

export default XBanner;
