import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="bg-[#FFF7E6] py-5">
        <div className="w-full flex flex-wrap items-center justify-center lg:gap-6 gap-3 mb-3 px-4">
          <Link href="/" className="text-blue-500 hover:underline text-sm lg:text-lg">
            Home
          </Link>
          <span className="text-gray-400 hidden lg:block">|</span>
          <a href="#" className="text-blue-500 hover:underline text-sm lg:text-lg">
            About Us
          </a>
          <span className="text-gray-400 hidden lg:block">|</span>
          <Link href="/terms" className="text-blue-500 hover:underline text-sm lg:text-lg">
            Terms & Conditions
          </Link>
          <span className="text-gray-400 hidden lg:block">|</span>
          <Link href="/privacy" className="text-blue-500 hover:underline text-sm lg:text-lg">
            Privacy Policy
          </Link>
          <span className="text-gray-400 hidden lg:block">|</span>
          <a href="#" className="text-blue-500 hover:underline text-sm lg:text-lg">
            Cancellation & Refunds
          </a>
        </div>
        <p className="text-center text-[16px] font-medium text-[#333333]">
          ©2025 DukaanSe.
        </p>
      </div>
    </footer>
  );
}