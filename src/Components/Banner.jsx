"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  "/image/cover-1.jpg",
  "/image/cover-2.jpg",
  "/image/cover-3.jpg",
  "/image/cover-4.webp",
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover Your Perfect Aesthetic
        </h1>
        <p className="mb-6 text-lg md:text-xl">
          Elegant tiles for every corner of your home
        </p>
        <Link href='/all-tiles' className="bg-[#2A2B2A] hover:bg-[#4d4e4d] px-6 py-3 rounded-full text-lg font-semibold transition">
          Browse Now
        </Link>
      </div>
    </div>
  );
}
