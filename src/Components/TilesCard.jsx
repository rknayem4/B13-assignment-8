import Image from "next/image";
import Link from "next/link";
import React from "react";

const TilesCard = ({ data }) => {
  const { title, image, dimensions, material, id } = data;
  return (
    <Link href={`/tile/${id}`} className=" ">
      <div className="relative w-full aspect-square group overflow-hidden">
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={title}
          className="object-cover rounded-t-xl hover:scale-105 transform transition duration-500 ease-in-out "
        />
        <div
          className="absolute bottom-0 w-full p-5 text-[#f9f9f9] bg-black/10 backdrop-blur-xs
    translate-y-full opacity-0
    group-hover:translate-y-0 group-hover:opacity-100
    transition-all duration-500 ease-in-out"
        >
          <h2 className="font-bold text-2xl text-center">{title}</h2>
          <div className="flex justify-between items-center">
            <span>Size: {dimensions}</span>
            <span>Material: {material}</span>
          </div>
        </div>
      </div>
      <p className="w-full btn ">View More Details</p>
    </Link>
  );
};

export default TilesCard;
