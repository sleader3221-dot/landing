import React from "react";
import bgImage from "../assets/top.png";
import phoneMockup from "../assets/mobile-screen.jpeg";
import googlePlayBadge from "../assets/google-play-badge.png";
import appStoreBadge from "../assets/app-store-badge.png";
import dukanselogo from "../assets/dukanselogo.webp";

const MenuIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        flex flex-col items-center
        bg-cover bg-center bg-no-repeat
        text-gray-900
        px-4 sm:px-6
        pt-16 sm:pt-20 lg:pt-24
        pb-12 sm:pb-16 lg:pb-20
        lg:rounded-br-[50px] lg:rounded-bl-[50px]
        rounded-bl-[25px] rounded-br-[25px]
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* White overlay - desktop */}
    <div
        className="absolute inset-0 z-0 hidden sm:block"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 40%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.15) 100%)",
        }}
      />


      {/* White overlay - mobile */}
      <div
        className="absolute inset-0 z-0 block sm:hidden"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 40%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.15) 100%)",
        }}
      />
      {/* Saara content z-10 pe — overlay ke upar */}
      <div className="relative z-10 flex flex-col items-center w-full">

        {/* Logo + Brand Name */}
        <div className="flex items-center gap-2">
          <img
            src={dukanselogo}
            alt="DukaanSe Logo"
            className="w-7 sm:w-8 lg:w-10"
          />
          <h1 className="text-4xl sm:text-5xl text-[#EC2D01] font-bold">
            DukaanSe
          </h1>
        </div>

        {/* Tagline */}
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[red] text-center mt-3 px-2 leading-tight">
          Smart Living. ZERO Delivery Fee!
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#282828] text-center mt-3 max-w-3xl px-4 leading-snug">
          Why pay ₹50 Delivery Fee &amp; explain your address 3 times?
        </p>

        {/* Phone Mockup */}
        <img
          src={phoneMockup}
          alt="App Mockup"
          className="
            rounded-2xl
            mt-8 sm:mt-10
            w-[290px] sm:w-[380px] md:w-[450px] lg:w-[680px]
            h-auto object-contain
            shadow-lg
          "
        />

        {/* Order karo text */}
        <h2 className="text-gray-800 text-center text-base sm:text-xl lg:text-2xl font-medium mt-6 px-4">
          Order karo phone se, aur pick up karo{" "}
          <span className="text-[#EC2D01] font-bold">DukaanSe.</span>
        </h2>

        {/* App Store Badges */}
        <div className="flex gap-3 sm:gap-5 justify-center items-center mt-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.dukaan.customer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={googlePlayBadge}
              alt="Get it on Google Play"
              className="w-[130px] sm:w-[150px] md:w-[160px] lg:w-[180px] h-auto cursor-pointer hover:scale-105 transition-transform drop-shadow-lg"
            />
          </a>
          <img
            src={appStoreBadge}
            alt="Download on the App Store"
            className="w-[130px] sm:w-[150px] md:w-[160px] lg:w-[180px] h-auto cursor-pointer hover:scale-105 transition-transform drop-shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}