"use client"
import React from "react";
import { toast } from "react-toastify";

const Button = () => {
    const handleBuy = ()=>{
    toast.success("Add to cart")
  }
  return (
    <div >
      <button
        onClick={handleBuy}
        className="btn block my-5 text-[#2A2B2A]  btn-outline rounded-full w-full md:max-w-30 min-w-35"
      >
        Buy Now{" "}
      </button>
    </div>
  );
};

export default Button;
