"use client";

import React, { useState } from "react";
import TilesCard from "./TilesCard";

const TilesSearch = ({ tilesData, Category }) => {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  const filteredTiles = tilesData.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory = select ? item.category === select : true;

    return matchSearch && matchCategory;
  });

  return (
    <>
      <div className="flex gap-2 justify-between items-center my-4">
        <input
          className="input flex-1 max-w-50"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <fieldset className="fieldset flex-1 max-w-50">
          <select
            className="select"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="">All</option>
            {Category.map((cat) => (
              <option key={cat.id} value={cat.category}>
                {cat.name}
              </option>
            ))}
          </select>
        </fieldset>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-5 p-3">
        {filteredTiles.map((data) => (
          <TilesCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default TilesSearch;
