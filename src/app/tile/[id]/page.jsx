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
  let creator;
  let tag;

  if (category == "ceramic") {
    creator = "Rahul ";
    tag = "Blue";
  } else if (category == "porcelain") {
    creator = "Rony";
    tag = "Minimalist";
  } else if (category == "glass") {
    creator = "Rajib Gandi";
    tag = "Blue";
  } else {
    creator = "Rayhan Khan";
    tag = "Minimalist";
  }

  return (
    <div className="  container mx-auto p-5 flex max-md:flex-col gap-3 justify-between border border-gray-100 shadow rounded-2xl m-5 ">
      <div className="flex-1">
        <Image src={image} alt={tiles} width={700} height={600}></Image>
      </div>
      <div className="text-left flex-1 max-md:text-center relative space-y-3">
        <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
        <p>{description}</p>
        <h5 className="text-3xl font-bold my-6">
          Price : ${price}{" "}
          <span className="text-sm font-normal">{currency}</span>
        </h5>
        <div className="divider"></div>
        <p> Size : {dimensions}</p>
        <p>Material : {material}</p>
        <p>Creator : {creator}</p>
        <div className="badge badge-soft badge-primary absolute top-0 right-0 m-6">
          {tag}
        </div>
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
