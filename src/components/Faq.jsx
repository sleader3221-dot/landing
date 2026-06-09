// import React, { useState } from "react";


// // FAQ Data
// const faqData = [
//   {
//     question: "What is DukaanSe?",
//     answer:
//       "DukaanSe is a local grocery shopping app that connects you directly to your nearby kirana stores. You can place your order, pick it up from the store, and SAVE 25% more than you would anywhere else. It keeps things simple, fast, and affordable while supporting neighbourhood stores.",
//   },
//   {
//     question: "What are Gullak Coins & how do they work?",
//     answer:
//       "Gullak Coins are DukaanSe's loyalty rewards that offer a 25% instant discount (up to ₹100 or your Gullak Wallet balance, whichever is lower) on every pickup order. They are valid for 30 days, so make sure to use them and enjoy your savings.",
//   },
//   {
//     question: "How can I earn Gullak Coins?",
//     answer:
//       "You can earn Gullak Coins in several ways:\n\n          a. By placing more orders #ShopMore.SaveMore.\n          b. Through referrals when your friend makes their first order #ReferMore.EarnMore.\n          c. Via limited-time promotions or campaigns in the app.\n\nStart earning today. Don't wait!",
//   },
//   {
//     question: "What is the delivery fee & how can I get FREE Delivery?",
//     answer:
//       "DukaanSe offers a flat delivery fee of ₹25 for all orders requiring delivery. You can enjoy **FREE** Delivery on orders over **₹899.**\n\nHowever, the best way to save is by choosing Pick Up. With this, you will:\n          - Never pay a Delivery Fee\n          - Enjoy the highest discounts\n          - Earn additional savings through Gullak Coins\n\nExperience the most rewarding way to shop online!",
//   },
//   {
//     question: "How do I cancel my order & get a refund?",
//     answer:
//       "You can cancel your order via DukaanSe within 5 minutes of placing it, provided the store has not begun preparing it. Once cancelled, refunds for prepaid orders are processed immediately and usually appear in your original payment method within 3 to 7 business days.",
//   },
//   {
//     question: "Why should I choose pickup instead of delivery?",
//     answer:
//       "Pickup lets you save instantly with FLAT 25% OFF (up to ₹100 or your Gullak Wallet balance, whichever is lower). It also supports local businesses, minimises delivery delays, and offers real-time order control.",
//   },
//   {
//     question: "Which stores can I order from?",
//     answer:
//       "You can order from verified local kirana stores near you. We onboard shops only after assessing their product quality, pricing, and service reliability.",
//   },
//   {
//     question: "Is there a minimum order value?",
//     answer:
//       "There is no minimum order value required on DukaanSe.",
//   },
//   {
//     question: "Are product prices the same as those in the kirana stores?",
//     answer:
//       "Yes, prices are displayed directly from the store with no hidden charges. Any discounts you receive come from DukaanSe's pickup or coin savings system.",
//   },
//   {
//     question: "How do referrals work?",
//     answer:
//       "You can share your phone number to refer friends to DukaanSe. When they sign up and place their first order, both you and your friend will receive Gullak Coins as a reward.",
//   },
//   {
//     question: "Do Gullak Coins expire?",
//     answer:
//       "Your Gullak coins have a 30-day expiry, so use them daily to save more.",
//   },
//   {
//     question: "How do I contact customer support?",
//     answer:
//       "You can reach us anytime at support@dukaanseindia.com. We're here to help with orders, refunds, or account issues.",
//   },
//   {
//     question: "Can I change my store or location after placing an order?",
//     answer:
//       "Once an order is placed, it is assigned to a specific store and location to ensure accuracy and quick processing. Therefore, changing the store or location is not possible.",
//   },
// ];

// export default function FAQ() {
//   // const [faqs, loading, error] = useFaq();
//   const [openIndex, setOpenIndex] = useState(0);

//   // Function to render text with bold formatting
//   const renderAnswer = (text) => {
//     const parts = text.split('**');
//     return parts.map((part, idx) => 
//       idx % 2 === 1 ? <span key={idx} className="font-bold">{part}</span> : part
//     );
//   };

//   return (
//     // here we need to decrease the sm size for margin
//     <section className="bg-white py-16 sm:py-18">
//       <div className="container mx-auto px-4">
//         <h2 className="mb-12 text-center text-[32px] font-semibold text-[#333333]">
//           Frequently Asked Questions (FAQs)
//         </h2>

//         {/* FAQ Container */}
//         <div className="w-full max-w-[1400px] min-h-[600px] mx-auto overflow-hidden rounded-xl bg-[#F2F2F2] p-8 flex flex-col gap-6">
//           {faqData.map((faq, i) => (
//             <div key={i} className="border-b border-neutral-300 last:border-b-0 pb-6">
//               <div className="flex items-start space-x-5 md:space-x-8">
//                 {/* 1. Number */}
//                 <span className="text-[40px] font-bold text-[#333333] md:text-4xl">
//                   {(i + 1).toString().padStart(2, "0")}
//                 </span>

//                 {/* 2. Question and Answer */}
//                 <div className="flex-1">
//                   <p className="text-[24px] font-semibold text-[#EC2D01] md:text-xl">
//                     {faq.question}
//                   </p>
//                   <p className="mt-3 text-[15px] md:text-[18px] font-normal text-[#333333] leading-relaxed whitespace-pre-line">
//                     {renderAnswer(faq.answer)}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import useFaq from "../hooks/useFaq";

export default function FAQ() {
  const { faqs, loading, error } = useFaq();
  const [openIndex, setOpenIndex] = useState(0);

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

  if (loading)
    return <p className="text-center py-16 text-gray-500">Loading...</p>;

  if (error)
    return <p className="text-center py-16 text-red-500">{error}</p>;

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
                {/* Number */}
                <span className="text-[40px] font-bold text-[#333333] md:text-4xl">
                  {(i + 1).toString().padStart(2, "0")}
                </span>

                {/* Question & Answer */}
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