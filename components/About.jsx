const CheckIcon = () => (
  <div className="bg-green-100 rounded-full shrink-0">
    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
    </svg>
  </div>
);

export default function About() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-8 sm:py-16 lg:py-13 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-red-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
            We are <span className="text-[#EC2D01]">DukaanSe.</span> <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 inline-block mt-2">
              Quick Commerce is too slow.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start lg:items-center">
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-[30px] sm:rounded-[40px] shadow-sm border border-gray-100">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                "We noticed something strange. People were paying <span className="text-red-600 font-bold">₹50 in delivery fees</span> & explaining their address to a rider... simply to get milk from a shop <span className="underline decoration-orange-300 decoration-2">300 meters away</span>."
              </p>
              <div className="h-px w-16 sm:w-20 bg-gray-200 my-6 sm:my-8"></div>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We realised that <span className="font-bold text-gray-900">Real Convenience</span> isn't waiting for a bike; it's walking in, grabbing your bag, and walking out—no phone calls, no surge pricing!
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-orange-50/30 p-6 sm:p-8 md:p-10 rounded-[30px] sm:rounded-[40px] shadow-lg border border-orange-100">
              <p className="text-lg sm:text-xl italic font-light leading-relaxed text-gray-700">
                "DukaanSe bridges the gap between the internet's speed & your neighbourhood's trust. We don't replace the Kirana store; <span className="text-orange-500 font-bold">we give it a turbo-charger!</span>"
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10 sm:space-y-12">
            <div className="group">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-red-600 rounded-full group-hover:w-12 transition-all"></span>
                Our Mission
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed bg-[#FFF7E6] p-5 sm:p-6 rounded-2xl sm:rounded-3xl border-l-[6px] sm:border-l-8 border-[#FDBA74]">
                To prove that the most efficient logistics network in India is your own two feet. We turn your <span className="font-semibold text-gray-900">evening walk into wealth.</span>
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 px-1">Our Promise:</h3>
              <div className="grid gap-3 sm:gap-4">
                {[
                  { title: "ZERO Friction", desc: "No Queues. No Waiting. Just Scan & Go!" },
                  { title: "ZERO Delivery Drama", desc: "No riders asking for directions." },
                  { title: "ZERO DELIVERY FEES", desc: "Available on all pickup orders. No Minimum Order Value required." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 sm:gap-4 bg-white p-4 rounded-xl sm:rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
                    <CheckIcon />
                    <div>
                      <h4 className="font-bold text-gray-900 uppercase text-xs sm:text-sm tracking-wide">{item.title}</h4>
                      <p className="text-gray-500 text-xs sm:text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24 px-2">
          <div className="bg-white border-2 border-green-100 rounded-[24px] sm:rounded-[30px] p-1.5 shadow-sm">
            <div className="bg-green-50/50 border border-green-200 rounded-[20px] sm:rounded-[26px] py-6 px-4 sm:px-6 text-center">
               <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-700 leading-snug">
                 The money you save goes into your <span className="relative inline-block px-1">
                   <span className="relative z-10">Gullak</span>
                   <span className="absolute bottom-1 left-0 w-full h-2 bg-yellow-300 -z-0 rounded-full"></span>
                 </span>, not a corporation's fuel tank.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}