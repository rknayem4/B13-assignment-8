import React from "react";
import TilesCard from "./TilesCard";
import Link from "next/link";
import { getTiles } from "@/app/lib/data";

const TopCollection = async () => {
  const tilesData = await getTiles();
  const top = tilesData.slice(6, 12);
  return (
    <div className="text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5 p-3">
        {top.map((data) => (
          <TilesCard key={data.id} data={data}></TilesCard>
        ))}
      </div>
      <Link className="btn w-[30vw] my-3 bg-[#2A2B2A] text-white rounded-full " href="/all-tiles">
        Explore More
      </Link>
    </div>
  );
};

export default TopCollection;
