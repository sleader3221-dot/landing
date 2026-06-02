// import React from "react";

// export default function Stats() {
//   const stats = [
//     { value: "XX,XXX+", label: "Happy Customers" },
//     { value: "XX,XXX+", label: "Satisfied Kiranas" },
//     { value: "XX,XX,XXX+", label: "Orders Delivered" },
//   ];

//   return (
//     <section className="bg-white md:py-16 lg:py-16 sm:py-24">
//       <div className="container mx-auto max-w-7xl text-center px-4">
//         <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-[#333333] ">
//           {/* <span >Your Daily Essentials.</span> <br /> Now Available Nearby. */}
//           <span>Why ?</span>

//         </h2>

//         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
//           {stats.map((s) => (
//             <div
//               key={s.label}
//               className="bg-[#FFF7E6] flex flex-col justify-center items-center gap-3 rounded-[16px] shadow-sm opacity-100
//                          w-[90%] sm:w-[320px] md:w-[357px] h-[180px] md:h-[196px] px-6 py-8"
//             >
//               <p className="text-4xl sm:text-5xl font-bold text-[#EC2D01]">{s.value}</p>
//               <p className="mt-2 text-base sm:text-lg text-[#333333] font-semibold">
//                 {s.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import traffic from "../assets/traffic.jpeg"
import customer from "../assets/customer.jpeg"
export default function Stats() {
  return (
    <section className="bg-white py-10 sm:py-18 lg:mt-24">
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* Main Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333]">
            Why <span className="text-[#EC2D01]">DukaanSe?</span>
          </h2>
        </div>

        {/* 2 Big Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* CARD 1: THE PROBLEM */}
          <div className="bg-[#FFF5F5] rounded-[32px] overflow-hidden border border-red-100 shadow-sm flex flex-col">
            {/* Image Placeholder */}
            <div className="h-[300px] bg-gray-200 overflow-hidden">
               <img src={traffic} alt="Delivery Problem" className="w-full h-full object-cover" />
               <div className="w-full h-full flex items-center justify-center text-gray-400 bg-red-100 italic">
                 [Image: Delivery Problem Illustration]
               </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#333333] mb-6 leading-tight">
                Delivery Apps are great. <br />
                <span className="text-red-600">Until they are NOT!</span>
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-2xl">🚫</span>
                  <p className="text-[#444444]">
                    <span className="font-bold text-gray-900 block text-lg">The GPS Struggle:</span>
                    "Bhaiya, turn left at the green gate... no, not that gate." 
                    <span className="text-sm block text-gray-500 mt-1">(Stop being a call centre for riders).</span>
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">🚫</span>
                  <p className="text-[#444444]">
                    <span className="font-bold text-gray-900 block text-lg">The Surge Pricing:</span>
                    "Raining? That's ₹70 extra." 
                    <span className="text-sm block text-gray-500 mt-1">(Your legs work fine in the rain).</span>
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">🚫</span>
                  <p className="text-[#444444]">
                    <span className="font-bold text-gray-900 block text-lg">The "10-Minute" Lie:</span>
                    It usually takes 25. Walking takes you exactly 5!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: THE SOLUTION */}
          <div className="bg-[#F6FFED] rounded-[32px] overflow-hidden border border-green-100 shadow-sm flex flex-col">
            {/* Image Placeholder */}
            <div className="h-[300px] bg-gray-200 overflow-hidden">
               <img src={customer} alt="DukaanSe Solution" className="w-full h-full object-cover" />
               <div className="w-full h-full flex items-center justify-center text-gray-400 bg-green-100 italic">
                 [Image: DukaanSe Solution Illustration]
               </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#333333] mb-6 leading-tight">
                The <span className="text-[#EC2D01]">"DukaanSe"</span> <br /> 
                Zero-Wait Solution!
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-2xl">📱</span>
                  <p className="text-[#444444]">
                    <span className="font-bold text-gray-900 block text-lg">Know Before You Go.</span>
                    Don’t walk to find out the milk is over. Check on DukaanSe & get going.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">⚡</span>
                  <p className="text-[#444444]">
                    <span className="font-bold text-gray-900 block text-lg">Skip the Line.</span>
                    While others wait for billing, your bag is packed, billed, and ready.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">🤝</span>
                  <p className="text-[#444444]">
                    <span className="font-bold text-gray-900 block text-lg">OTP & Go.</span>
                    Show your OTP. Grab your bag & be home before the kettle boils.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>
    </section>
  );
}