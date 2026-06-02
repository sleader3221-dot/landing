// import React, { useState } from "react";
// import bgImage from "../assets/top.png";
// import phoneMockup from "../assets/mobile-screen.jpeg";
// import googlePlayBadge from "../assets/google-play-badge.png";
// import appStoreBadge from "../assets/app-store-badge.png";
// import logo from "../assets/Logo-dukhanse.png";

// // --- ICONS ---
// const MenuIcon = ({ className }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     <line x1="3" y1="12" x2="21" y2="12" />
//     <line x1="3" y1="6" x2="21" y2="6" />
//     <line x1="3" y1="18" x2="21" y2="18" />
//   </svg>
// );

// const XIcon = ({ className }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     <line x1="18" y1="6" x2="6" y2="18" />
//     <line x1="6" y1="6" x2="18" y2="18" />
//   </svg>
// );

// // --- MAIN HERO SECTION ---
// export default function Hero() {
//   return (
//     <div className="relative overflow-visible pb-[280px] sm:pb-[300px] md:pb-[340px] scroll-smooth">
//       <section
//         id="hero"
//         className="relative min-h-[90vh] flex flex-col items-center justify-center bg-cover bg-center text-gray-900 px-4 sm:px-6 lg:rounded-br-[50px] lg:rounded-bl-[50px] rounded-bl-[25px] rounded-br-[25px] "
//         style={{ backgroundImage: `url(${bgImage})` }}
//       >
//         {/* Hero Content */}
//         <div className="relative z-30 flex flex-col items-center text-center max-w-[95%] sm:max-w-2xl md:max-w-6xl mt-16 sm:-mt-40 lg:-mt-48">
//           {/* Headline */}
//           <img src={logo} alt="" className="w-56 md:w-86 lg:w-84" />
//           <div
//             className="
//             flex
//             items-center
//             justify-between
//             lg:py-6
//             py-2
//             md:justify-center
//             md:space-x-10
//             text-center
//           "
//           >
//             <h1 className="text-2xl lg:text-5xl text-[red] font-bold">
//               {" "}
//               {/* Pickup from DukaanSe & SAVE 25%. Humesha! */}
//               Smart Living. ZERO Delivery Fee!
//             </h1>
//           </div>
//           <h1 className="text-[12px] sm:text-[36px] md:text-[48px] lg:text-xl lg:font-normal lg:-mt-3 leading-tight mb-4 lg:mb-4 text-[#333333] lg:tracking-wider">
//             {/* Order from your nearby Kirana stores & save with your Gullak coins. */}
//             Why pay ₹50 Delivery Fee & explain your address 3 times?
//             Order from your local Kirana, walk 5 minutes, and pick up your bag like a VIP.
//           </h1>

//           {/* Subtext */}
//           <p className="text-[16px] sm:text-[18px] md:text-[25px] lg:text-3xl lg:font-medium font-medium -mt-2 lg:mt-1 text-[#333333] mb-6 tracking-wide">
//             <span >Kahin aur se loge toh mehenga padega.</span> <br />
//             <i>Order karo <span className="text-red-500">GharSe</span> aur <span className="text-red-500">SAVE</span> karo <span className="text-red-500"> DukaanSe.</span> </i> <br /> <i>Download & Save 25%.</i>
//           </p>

//           {/* App Store Badges */}
//           <div className="flex  sm:flex-row gap-4 sm:gap-5 justify-center items-center mb-8">
//             <img
//               src={googlePlayBadge}
//               alt="Get it on Google Play"
//               className="w-[150px] sm:w-[170px] md:w-[190px] lg:w-[200px] h-auto cursor-pointer hover:scale-105 transition-transform drop-shadow-lg"
//             />
//             <img
//               src={appStoreBadge}
//               alt="Download on the App Store"
//               className="w-[150px] sm:w-[170px] md:w-[190px] lg:w-[200px] h-auto cursor-pointer hover:scale-105 transition-transform drop-shadow-lg"
//             />
//           </div>

//         </div>

//         <img
//           src={phoneMockup}
//           alt="App Mockup"
//           className="
//             absolute
//             bottom-[-205px] sm:bottom-[-200px] md:bottom-[-250px] lg:bottom-[-270px]
//             left-1/2 -translate-x-1/2
//             w-[350px] sm:w-[380px] md:w-[480px] lg:w-[620px]
//             h-auto object-contain z-20
//             transition-all duration-300
//           "
//         />

//       </section>
//     </div>
//   );
// }

import React, { useState } from "react";
import bgImage from "../assets/top.png";
import phoneMockup from "../assets/mobile-screen.jpeg";
import googlePlayBadge from "../assets/google-play-badge.png";
import appStoreBadge from "../assets/app-store-badge.png";
import logo from "../assets/Logo-dukhanse.png";
import dukanselogo from "../assets/dukanselogo.webp";
// --- ICONS ---
const MenuIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Hero() {
  return (
    <div className="relative overflow-visible pb-[350px] sm:pb-[400px] md:pb-[250px] lg:pb-[100px] scroll-smooth">
      <section
        id="hero"
        className="relative min-h-[95vh] flex flex-col items-center justify-center bg-cover bg-center text-gray-900 px-4 sm:px-6 lg:rounded-br-[50px] lg:rounded-bl-[50px] rounded-bl-[25px] rounded-br-[25px]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(${bgImage})`,
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Hero Content */}
        <div className="relative z-30 flex flex-col items-center text-center max-w-[95%] sm:max-w-2xl md:max-w-3xl lg:max-w-6xl mt-16 sm:-mt-40 md:-mt-32 lg:-mt-50 mb-3">
          {/* Headline */}
          {/* <img src={dukanselogo} alt="" className="w-5 md:w-7 lg:w-8" />
          <h1 className="text-5xl text-[#EC2D01] font-bold"> DukaanSe</h1> */}

          <div className="flex items-center gap-2">
            <img src={dukanselogo} alt="" className="w-6 md:w-7 lg:w-10 mt-2" />
            <h1 className="text-5xl text-[#EC2D01] font-bold mt-40 lg:mt-0">DukaanSe</h1>
          </div>

          <div
            className="
            flex 
            items-center 
            justify-between 
            lg:py-6 
            py-2
            md:justify-center
            md:space-x-10
            text-center
          "
          >
            <h1 className="text-2xl md:text-4xl lg:text-4xl mt-3 text-[red] font-bold">
              Smart Living. ZERO Delivery Fee!
            </h1>
          </div>
          <h1 className="text-[14px] max-w-4xl sm:text-[36px] md:text-[35px] lg:text-2xl lg:font-normal lg:-mt-1 leading-tight mb-4 lg:mb-5 text-[#282828] lg:tracking-wider">
            Why pay ₹50 Delivery Fee & explain your address 3 times?
          </h1>
        </div>

        {/* Mobile Mockup */}
        {/* <div className="mt-4"> */}
        <img
          src={phoneMockup}
          alt="App Mockup"
          className="
            absolute rounded-2xl
            bottom-[-220px] sm:bottom-[-200px] md:bottom-[-180px] lg:bottom-[38px]
            left-1/2 -translate-x-1/2
            w-[360px] sm:w-[380px] md:w-[420px] lg:w-[700px]
            h-auto object-contain z-20  
            transition-all duration-300
          "
        />
        {/* </div> */}

        <div
          className="
  relative
  z-30 
  mt-24
  bottom-[-380px] sm:bottom-[-350px] md:bottom-[-300px] lg:bottom-[-365px]
  left-1/2 -translate-x-1/2
  w-full 
  flex flex-col items-center gap-4 /* Sab kuch vertical stack karne ke liye */
"
        >
          <h2 className="text-gray-800 text-center mt-35 text-2xl font-medium lg:mt-2 mb-3 ">
            Order karo phone se, aur pick up karo{" "}
            <span className=" text-[#EC2D01] font-bold">DukaanSe.</span>
          </h2>
          {/* Badges Wrapper - Ye dono images ko ek line mein rakhega */}
          <div className="flex gap-4 sm:gap-5 md:gap-6 justify-center items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.dukaan.customer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={googlePlayBadge}
                alt="Get it on Google Play"
                className="w-[120px] sm:w-[150px] md:w-[160px] lg:w-[180px] h-auto cursor-pointer hover:scale-105 transition-transform drop-shadow-lg"
              />
            </a>
            <img
              src={appStoreBadge}
              alt="Download on the App Store"
              className="w-[120px] sm:w-[150px] md:w-[160px] lg:w-[180px] h-auto cursor-pointer hover:scale-105 transition-transform drop-shadow-lg"
            />
          </div>

          {/* Text niche aayega */}
          {/* <h2 className="text-gray-800 text-xl font-medium">Order karo phone se, aur pick up karo <span className=" text-[#EC2D01] font-bold">DukaanSe.</span></h2> */}
        </div>
      </section>
    </div>
  );
}
