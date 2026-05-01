
import { getTiles } from "@/app/lib/data";
import Button from "@/Components/Button";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

const TileDetailsPage = async ({ params }) => {
  const tiles = await getTiles();
  const { id } = await params;
  const data = tiles.find((res) => res.id == id);
  const {
    title,
    image,
    description,
    price,
    currency,
    dimensions,
    material,
    category,
    inStock,
  } = data;
  // console.log(data);

  return (
    <div className="container mx-auto p-5 flex max-md:flex-col gap-3 justify-between items-center">
      <div className="flex-1">
        <Image src={image} alt={tiles} width={700} height={600}></Image>
      </div>
      <div className="text-left flex-1 max-md:text-center space-y-3">
        <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
        <p>{description}</p>
        <h5 className="text-3xl font-bold my-6">
          Price : ${price}{" "}
          <span className="text-sm font-normal">{currency}</span>
        </h5>
        <div className="divider"></div>
        <p> Size : {dimensions}</p>
        <p>Material : {material}</p>

        <span>
          {inStock ? (
            <div className="badge badge-outline badge-success">In Stock</div>
          ) : (
            <div className="badge badge-outline badge-warning">Stock Out</div>
          )}
        </span>
          <Button></Button>
      </div>
    </div>
  );
};

export default TileDetailsPage;
