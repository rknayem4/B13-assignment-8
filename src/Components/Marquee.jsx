import React from "react";
import Marquee from "react-fast-marquee";

const Marque = async () => {
  const res = await fetch("https://tiles-api-server-yz1c.vercel.app/data.json");
  const tilesData = await res.json();
  return (
    <div className="px-3 bg-[#2A2B2A] text-white w-full">
      <div className="container mx-auto ">
      <Marquee>
        {tilesData.map((res) => (
          <div className="flex items-center my-5" key={res.id}>
            |
            <p className="mx-20" key={res.id}>

              New Arrivals : {res.title}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
    </div>
  );
};

export default Marque;
