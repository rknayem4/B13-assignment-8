import React from "react";
import TilesCard from "./TilesCard";
import Link from "next/link";
import { getTiles } from "@/app/lib/data";

const TopCollection = async () => {
  const tilesData = await getTiles();
  const top = tilesData.slice(6, 10);
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-center my-5 animate__animated animate__backInRight">Papular Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-5 p-3">
        {top.map((data) => (
          <TilesCard key={data.id} data={data}></TilesCard>
        ))}
      </div>
      <Link className="btn  min-w-50 my-3 bg-[#2A2B2A] text-white rounded-full " href="/all-tiles">
        Explore More
      </Link>
    </div>
  );
};

export default TopCollection;
