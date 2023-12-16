import React from "react";
import SmallCard from "./SmallCard";
import Total from "./Total";
import YourCard from "./YourCard";

export default function Main() {
  return (
    <div className="flex max-w-xs flex-col p-4">
      <YourCard />
      <SmallCard />
      <Total />
    </div>
  );
}
