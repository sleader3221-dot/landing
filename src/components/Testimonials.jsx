import React from "react";
import { Star } from "lucide-react";
import step1Image from "../assets/iMockup - Google Pixel 8 Pro.png";

const reviews = [
  {
    name: "Eleanor Pena",
    role: "Happy customer",
    stars: 5,
    text: "Lorem ipsum dolor sit amet consectetur. Nunc posuere felis amet eleifend nam sit. Accumsan sed nisl nam sed id. Eros sociis luctus tempor.",
    img: step1Image,
  },
  {
    name: "Robert Fox",
    role: "Happy customer",
    stars: 5,
    text: "Lorem ipsum dolor sit amet consectetur. Nunc posuere felis amet eleifend nam sit. Accumsan sed nisl nam sed id. Eros sociis luctus tempor.",
    img: step1Image,
  },
  {
    name: "Jane Cooper",
    role: "Happy customer",
    stars: 4,
    text: "Lorem ipsum dolor sit amet consectetur. Nunc posuere felis amet eleifend nam sit. Accumsan sed nisl nam sed id. Eros sociis luctus tempor.",
    img: step1Image,
  },
  {
    name: "Robert Fox",
    role: "Happy customer",
    stars: 5,
    text: "Lorem ipsum dolor sit amet consectetur. Nunc posuere felis amet eleifend nam sit. Accumsan sed nisl nam sed id. Eros sociis luctus tempor.",
    img: step1Image,
  },
  {
    name: "Jane Cooper",
    role: "Happy customer",
    stars: 5,
    text: "Lorem ipsum dolor sit amet consectetur. Nunc posuere felis amet eleifend nam sit. Accumsan sed nisl nam sed id. Eros sociis luctus tempor.",
    img: step1Image,
  },
  {
    name: "Robert Fox",
    role: "Happy customer",
    stars: 4,
    text: "Lorem ipsum dolor sit amet consectetur. Nunc posuere felis amet eleifend nam sit. Accumsan sed nisl nam sed id. Eros sociis luctus tempor.",
    img: step1Image,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-[#333333] leading-tight">
          User Reviews and Feedback
        </h2>

        <p className="mt-4 text-[16px] leading-8 text-[#333333] font-medium">
          See how Dukaanसे has transformed users' experiences through their own
          words.
        </p>

        {/* Responsive Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-[#F2F2F2] border border-gray-200 rounded-lg shadow-sm flex flex-col justify-between p-4 sm:p-5 md:p-6"
              style={{
                width: "100%",
                maxWidth: "360px",
                minHeight: "192px",
              }}
            >
              {/* TOP SECTION: Profile + Stars */}
              <div className="flex items-center justify-between">
                {/* Left: Profile Image and Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-[16px] font-medium text-[#333333] leading-none">
                      {review.name}
                    </p>
                    <p className="text-[14px] text-[#555555] leading-none mt-[8px]">
                      {review.role}
                    </p>
                  </div>
                </div>

                {/* Right: Stars */}
                <div className="flex text-[#FEBC1D]">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-4 w-4 ${
                        idx < review.stars ? "fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* BOTTOM SECTION: Review Text */}
              <p className="text-[15px] sm:text-[16px] text-[#333333] font-medium mt-3 text-left sm:text-justify">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
