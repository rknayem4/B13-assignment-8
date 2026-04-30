import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen container mx-auto flex justify-center items-center">
      <div className="text-center">
      <h3 className="text-9xl font-bold">404</h3>
      <h3 className="text-4xl font-bold">Opps! page is not Found</h3>
      <Link className="btn my-8 bg-[#2A2B2A] min-w-2xs w-[10vw] text-white rounded-full" href="/">
        {" "}
        Back To Home
      </Link>
    </div>
    </div>
  );
};

export default NotFound;
