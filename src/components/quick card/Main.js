import React from "react";
import SmallCard from "./SmallCard";
import Total from "./Total";
import YourCard from "./YourCard";

export default function Main() {
  return (
    <div className="flex flex-col max-w-xs p-4">
      <YourCard />
      <SmallCard />
      <Total />
    </div>
  );
}
