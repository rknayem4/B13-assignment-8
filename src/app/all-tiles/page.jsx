
import TilesCard from "@/Components/TilesCard";
import React from "react";
import { getCategory, getTiles } from "../lib/data";
import TilesSearch from "@/Components/TilesSearch";

const AllTilesPage = async () => {
  const tilesData = await getTiles();
  const Category = await getCategory()

  return (
    <div className="h-screen container mx-auto ">
      <h2 className="text-3xl font-bold text-center my-3">All Tiles </h2>
       <TilesSearch Category={Category} tilesData={tilesData} />
      {/* <div className="">
        <input className="input" type="text" placeholder="Search..." />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5 p-3">
        {tilesData.map((data) => (
          <TilesCard key={data.id} data={data}></TilesCard>
        ))}
      </div> */}
    </div>
  );
};

export default AllTilesPage;
