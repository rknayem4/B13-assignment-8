import React from "react";
import Marquee from "react-fast-marquee";

const Marque = async () => {
  const res = await fetch("https://tiles-api-server-yz1c.vercel.app/data.json");
  const tilesData = await res.json();
  return (
    <div className="container mx-auto px-3">
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
  );
};

export default Marque;
