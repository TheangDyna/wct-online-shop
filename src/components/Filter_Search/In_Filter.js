import React from "react";

function In_Filter() {
  return (
    <div className="h-[300px] bg-slate-100 mt-5 flex mx-[150px]">
      <div className="w-1/4 pl-[50px] mr-3">
        <div className="font-medium pt-4 text-lg"> Sort By</div>
        <ul className="pt-2 text-zinc-400">
          {[
            "Default",
            "Popularity",
            "Average rating",
            "Newness",
            "Price: Low to High",
            "Price: High to Low",
          ].map((item, index) => (
            <li key={index} className={`pt-1`}>
              <a
                href="#"
                className={`hover:text-blue-400
                 hover:underline underline-offset-8 decoration-1`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/4 mr-1">
        <div className="font-medium pt-4 text-lg">Price</div>
        <ul className="pt-2 text-zinc-400">
          {[
            "All",
            "$0.00 - $50.00",
            "$50.00 - $100.00",
            "$50.00 - $150.00",
            "$150.00 - $200.00",
            "$200.00+",
          ].map((item, index) => (
            <li key={index} className={`pt-1`}>
              <a
                href="#"
                className={`hover:text-blue-400
                 hover:underline underline-offset-8 decoration-1`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/4">
        <div className="font-medium pt-4 text-lg">Color</div>
        <ul className="pt-2 text-zinc-400">
          {[
            { name: "Black", className: "bg-black", borderClassName: "" },
            { name: "Blue", className: "bg-blue-500", borderClassName: "" },
            { name: "Grey", className: "bg-gray-400", borderClassName: "" },
            { name: "Green", className: "bg-green-500", borderClassName: "" },
            { name: "Red", className: "bg-red-500", borderClassName: "" },
            {
              name: "White",
              className: "bg-slate-200",
              borderClassName: "border-2 border-slate-400",
            },
          ].map((color, index) => (
            <li key={index} className="pt-1 items-center flex">
              <a
                href="#"
                className={`rounded-full w-3 h-3 ${color.className} ${color.borderClassName}`}
              ></a>
              <a
                href="#"
                className="ml-1 hover:text-sky-500 hover:underline underline-offset-8 decoration-1"
              >
                {color.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-medium pt-4 text-lg">Tags</div>
        <ul className="pt-2 text-zinc-400">
          {[["Fashion", "Lifestyle"], ["Denim", "Streetstyle"], ["Crafts"]].map(
            (tagGroup, index) => (
              <li key={index} className="pt-1 items-center flex">
                {tagGroup.map((tag, tagIndex) => (
                  <a
                    href="#"
                    key={tagIndex}
                    className="rounded-full border-slate-300 border px-2 mr-1 hover:border-blue-700"
                  >
                    {tag}
                  </a>
                ))}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default In_Filter;
