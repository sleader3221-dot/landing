import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      step: "STEP 1",
      title: "Add items from your Local Dukaan.",
      imgSrc: "/images/iMockup - Google Pixel 8 Pro.png",
    },
    {
      step: "STEP 2",
      title: "Apply Gullak Coins & Slash your Bill by 25%*",
      imgSrc: "/images/iMockup - Google Pixel 8 Pro (1).png",
    },
    {
      step: "STEP 3",
      title: "Pay. Pickup. SAVE. Repeat.",
      imgSrc: "/images/iMockup - Google Pixel 8 Pro (2).png",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm font-medium">
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          How to Save?
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="overflow-hidden rounded-2xl bg-[#FEBC1D] p-8 text-center flex flex-col"
            >
              <div className="flex-grow">
                <span className="inline-block rounded-full bg-white px-4 py-1 text-[20px] font-bold text-red-500">
                  {item.step}
                </span>
                <h3 className="mt-4 text-[20px] font-bold text-black/80">{item.title}</h3>
              </div>
              <div className="mt-6 -mb-8 relative w-full h-[320px]">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  fill
                  className="object-contain rounded-b-2xl"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-20 mb-8">
          <Image
            src="/images/evening.jpeg"
            alt="Evening walk"
            width={1200}
            height={600}
            style={{ width: "auto", height: "auto" }}
            className="rounded-xl max-w-full"
          />
        </div>
        <span className="text-xl font-bold">
          Your Evening Walk just paid for your Milk. Smart Neighbours are Switching.{"  "}
          <span className="text-[#EC2D01] font-extrabold">When are you?</span>
        </span>
      </div>
    </section>
  );
}