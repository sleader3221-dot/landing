import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative pt-80 pb-5 text-center bg-transparent">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4">
        <Image
          src="/images/seller.jpeg"
          alt="App Mockup"
          width={600}
          height={327}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 600px, 600px"
          className="
            h-auto max-h-[400px] w-full max-w-[600px]
            object-contain
            mx-auto
            rounded-xl
            transition-all
            duration-300 mb-10
          "
        />
        <span className="text-lg">Every order on DukaanSe supports a local business owner like Gupta Ji, helping them avoid high commissions and compete with the giants.</span>
      </div>

      <div className="container mx-auto max-w-7xl px-4">
        <div className="bg-white rounded-t-[3rem] sm:rounded-t-[5rem] pt-56 pb-16">
          <p className="font-semibold mx-auto max-w-md text-[20px] text-[#333333] px-4 -mt-24 md:mt-2 lg:-mt-1">
            Download the App & <span className="text-[#EC2D01]">SAVE 25%</span> Today!
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 px-4">
            <a href="https://play.google.com/store/apps/details?id=com.dukaan.customer" aria-label="Get it on Google Play">
              <Image
                src="/images/google-play-badge.png"
                alt="Get it on Google Play"
                width={160}
                height={56}
                style={{ width: "auto", height: "auto" }}
                className="h-12 w-auto sm:h-14"
              />
            </a>
            <a href="#" aria-label="Download on the App Store">
              <Image
                src="/images/app-store-badge.png"
                alt="Download on the App Store"
                width={160}
                height={56}
                style={{ width: "auto", height: "auto" }}
                className="h-12 w-auto sm:h-14"
              />
            </a>
          </div>

          <div className="mt-8">
            <p className="text-[#333333] text-[20px] font-normal">Feel free reach us at:</p>
            <a
              href="mailto:support@dukaanseindia.com"
              className="mt-2 inline-block rounded-full bg-[#F2F2F2] px-6 py-2 font-normal text-[#333333] transition"
            >
              support@dukaanseindia.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
