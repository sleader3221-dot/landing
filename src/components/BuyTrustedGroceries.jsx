// import React, { useRef } from "react";

// import foodItem from "../assets/food item.png";
// import fruitItem from "../assets/fruit item.png";
// import fruitItem1 from "../assets/fruit item3.png";
// import fruitItem2 from "../assets/fruit item2.png";

// export default function BuyTrustedGroceries() {
//   const groceries = [
//     { imgSrc: foodItem, name: "Groceries" },
//     { imgSrc: fruitItem, name: "Fruits" },
//     { imgSrc: fruitItem1, name: "Fresh Vegetables" },
//     { imgSrc: fruitItem2, name: "Medicines" },
//   ];

//   return (
//     <section className="bg-white py-16">
//       <div className="text-center">
//         <span className="inline-block bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm font-medium">
//           Grocery Categories
//         </span>
//         <h2 className="text-4xl font-bold text-gray-900 mt-4">
//           Choose from a wide range of Daily Essentials

//         </h2>
//       </div>

//       {/* Scrollable Image Grid */}
//       <div
//         className="mt-12  py-2 flex gap-6 overflow-x-scroll scrollbar-hide scroll-smooth px-4"
//         style={{
//           scrollBehavior: "smooth",
//           scrollbarWidth: "none",
//           msOverflowStyle: "none",
//         }}
//       >
//         {groceries.map((g, index) => (
//           <div
//             key={index}
//             className="min-w-[20%] flex-shrink-0 text-center hover:scale-[1.02] transition-transform duration-300"
//           >
//             <div className="relative overflow-hidden rounded-2xl shadow-md">
//               <img
//                 src={g.imgSrc}
//                 alt={g.name}
//                 className="w-[360px] h-[400px] lg:w-[500px] object-cover rounded-2xl"
//               />
//             </div>
//             <h3 className="text-lg font-semibold text-gray-800 mt-4">
//               {g.name}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }






import React from "react";
import groceryImg from "../assets/grocery.jpeg";
import fruitsImg from "../assets/fruits.jpeg";
import vegetablesImg from "../assets/vegetables.jpeg";
import careImg from "../assets/skincare.jpeg";

export default function BuyTrustedGroceries() {
  const groceries = [
    { imgSrc: groceryImg, name: "Groceries" },
    { imgSrc: fruitsImg, name: "Fresh Fruits" },
    { imgSrc: vegetablesImg, name: "Vegetables" },
    { imgSrc: careImg, name: "Personal Care" },
  ];

  // List ko duplicate kar rahe hain smooth loop ke liye
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

      {/* --- INFINITE SCROLL SECTION --- */}
      <div className="relative flex overflow-hidden group">
        <div className="flex animate-infinite-scroll gap-6 px-6 group-hover:[animation-play-state:paused]">
          {infiniteGroceries.map((g, index) => (
            <div
              key={index}
              className="flex-shrink-0 cursor-pointer"
            >
              {/* Fixed Height and Width Container */}
              <div 
                className="
                  relative 
                  overflow-hidden 
                  rounded-[24px] 
                  shadow-sm 
                  bg-gray-100 
                  w-[260px] md:w-[340px] 
                  h-[320px] md:h-[420px] 
                  transition-all duration-300
                  border border-gray-100
                  group/card
                "
              >
                <img
                  src={g.imgSrc}
                  alt={g.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                />
                
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Category Name */}
              <div className="mt-5 flex items-center justify-center px-2">
                <div>
                  <h3 className="text-xl text-center font-bold text-gray-800 transition-colors">
                    {g.name}
                  </h3>
                 
                </div>
              
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% / 3)); }
        }

        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 25s linear infinite;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}