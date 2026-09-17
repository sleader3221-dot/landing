"use client";

import { fallbackFaqs } from "../services/faqService";
// import useFaq from "../hooks/useFaq"; // TEMPORARY: API integration disabled, using static data for now

export default function FAQ() {
  // const { faqs, loading, error } = useFaq(); // TEMPORARY: commented out
  const faqs = fallbackFaqs; // TEMPORARY: static data directly

  const renderAnswer = (text) => {
    const parts = text.split("**");
    return parts.map((part, idx) =>
      idx % 2 === 1 ? (
        <span key={idx} className="font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // TEMPORARY: loading/error states commented out since we're not calling the API right now
  // if (loading)
  //   return <p className="text-center py-16 text-gray-500">Loading...</p>;

  // if (error)
  //   return <p className="text-center py-16 text-red-500">{error}</p>;

  return (
    <section className="bg-white py-16 sm:py-18">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-[32px] font-semibold text-[#333333]">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="w-full max-w-[1400px] min-h-[600px] mx-auto overflow-hidden rounded-xl bg-[#F2F2F2] p-8 flex flex-col gap-6">
          {faqs.map((faq, i) => (
            <div
              key={faq._id}
              className="border-b border-neutral-300 last:border-b-0 pb-6"
            >
              <div className="flex items-start space-x-5 md:space-x-8">
                <span className="text-[40px] font-bold text-[#333333] md:text-4xl">
                  {(i + 1).toString().padStart(2, "0")}
                </span>

                <div className="flex-1">
                  <p className="text-[24px] font-semibold text-[#EC2D01] md:text-xl">
                    {faq.question}
                  </p>
                  <p className="mt-3 text-[15px] md:text-[18px] font-normal text-[#333333] leading-relaxed whitespace-pre-line">
                    {renderAnswer(faq.answer)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}