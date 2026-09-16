import Image from "next/image";

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
        backgroundImage: `url(/images/top.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div
        className="absolute inset-0 z-0 hidden sm:block"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 40%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.15) 100%)",
        }}
      />

      <div
        className="absolute inset-0 z-0 block sm:hidden"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 40%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.15) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="flex items-center gap-2">
          <Image
            src="/images/dukanselogo.webp"
            alt="DukaanSe Logo"
            width={40}
            height={40}
            className="!h-7 !w-7 sm:!h-8 sm:!w-8 lg:!h-10 lg:!w-10"
          />
          <h1 className="text-4xl sm:text-5xl text-[#EC2D01] font-bold">
            DukaanSe
          </h1>
        </div>

        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[red] text-center mt-3 px-2 leading-tight">
          Smart Living. ZERO Delivery Fee!
        </h2>

        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#282828] text-center mt-3 max-w-3xl px-4 leading-snug">
          Why pay ₹50 Delivery Fee &amp; explain your address 3 times?
        </p>

        <Image
          src="/images/mobile-screen.jpeg"
          alt="App Mockup"
          width={680}
          height={356}
          sizes="(max-width: 640px) 290px, (max-width: 768px) 380px, (max-width: 1024px) 450px, 680px"
          className="
            rounded-2xl
            mt-8 sm:mt-10
            w-full max-w-[680px] h-auto
            object-contain
            shadow-lg
          "
          priority
        />

        <h2 className="text-gray-800 text-center text-base sm:text-xl lg:text-2xl font-medium mt-6 px-4">
          Order karo phone se, aur pick up karo{" "}
          <span className="text-[#EC2D01] font-bold">DukaanSe.</span>
        </h2>

        <div className="flex gap-3 sm:gap-5 justify-center items-center mt-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.dukaan.customer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/google-play-badge.png"
              alt="Get it on Google Play"
              width={180}
              height={54}
              style={{ width: "auto", height: "auto" }}
              className="w-[130px] sm:w-[150px] md:w-[160px] lg:w-[180px] cursor-pointer hover:scale-105 transition-transform drop-shadow-lg"
            />
          </a>
          <Image
            src="/images/app-store-badge.png"
            alt="Download on the App Store"
            width={180}
            height={54}
            style={{ width: "auto", height: "auto" }}
            className="w-[130px] sm:w-[150px] md:w-[160px] lg:w-[180px] cursor-pointer hover:scale-105 transition-transform drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}