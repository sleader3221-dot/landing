"use client";

import Image from "next/image";

export default function BuyTrustedGroceries() {
  const groceries = [
    { imgSrc: "/images/grocery.jpeg", name: "Groceries" },
    { imgSrc: "/images/fruits.jpeg", name: "Fresh Fruits" },
    { imgSrc: "/images/vegetables.jpeg", name: "Vegetables" },
    { imgSrc: "/images/skincare.jpeg", name: "Personal Care" },
  ];

  const infiniteGroceries = [...groceries, ...groceries, ...groceries];

  return (
    <section className="bg-white py-4 sm:py-14 overflow-hidden">
      <div className="text-center px-4 mb-16">
        <span className="inline-block bg-red-50 text-red-600 px-4 py-1 rounded-full text-sm font-semibold tracking-wide border border-red-100 uppercase">
          Categories
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
          Choose From A Wide Range Of <br className="hidden md:block" /> Daily Essentials
        </h2>
      </div>

      <div className="relative overflow-hidden group">
        <div
          className="flex w-max gap-6 px-6 group-hover:[animation-play-state:paused]"
          style={{ animation: "scroll 25s linear infinite" }}
        >
          {infiniteGroceries.map((g, index) => (
            <div key={`${g.name}-${index}`} className="flex-shrink-0 cursor-pointer">
              <div className="relative overflow-hidden rounded-[24px] shadow-sm bg-gray-100 w-[260px] md:w-[340px] h-[320px] md:h-[420px] transition-all duration-300 border border-gray-100 group/card">
                <Image
                  src={g.imgSrc}
                  alt={g.name}
                  fill
                  sizes="(max-width: 768px) 260px, 340px"
                  className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="mt-5 flex items-center justify-center px-2">
                <h3 className="text-xl text-center font-bold text-gray-800 transition-colors">
                  {g.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}