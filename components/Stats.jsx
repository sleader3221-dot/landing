import Image from "next/image";

export default function Stats() {
  return (
    <section className="bg-white py-10 sm:py-18 lg:mt-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333]">
            Why <span className="text-[#EC2D01]">DukaanSe?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-[#FFF5F5] rounded-[32px] overflow-hidden border border-red-100 shadow-sm flex flex-col">
            <div className="h-[300px] w-full bg-gray-200 overflow-hidden relative">
              <Image
                src="/images/traffic.jpeg"
                alt="Delivery Problem"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
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

          <div className="bg-[#F6FFED] rounded-[32px] overflow-hidden border border-green-100 shadow-sm flex flex-col">
            <div className="h-[300px] w-full bg-gray-200 overflow-hidden relative">
              <Image
                src="/images/customer.jpeg"
                alt="DukaanSe Solution"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
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
                    Don't walk to find out the milk is over. Check on DukaanSe & get going.
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