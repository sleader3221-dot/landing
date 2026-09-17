import React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  ChevronRight,
  ShieldCheck,
  Store,
  Users,
  Truck,
  Receipt,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Gavel,
  ShieldAlert,
  AlertTriangle,
  Copyright,
  Coins,
  Mail,
  MapPin,
  Phone,
  User,
  Clock,
  Package,
} from "lucide-react";

const Terms = () => {
  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans">
      {/* HEADER: DukaanSe Branding */}
      <div className="bg-white rounded-2xl p-6 shadow-md border-b-4 border-[#FDB913] mb-6 mt-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-[#FDB913] p-3 rounded-xl shadow-inner">
              <FileText className="w-8 h-8 text-[#004A97]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#004A97]">
                Dukaanse - Terms of Use
              </h1>
              <div className="text-sm flex items-center gap-2 mt-1">
                <Link
                  href="/"
                  className="text-gray-500 hover:text-[#FDB913] transition-colors"
                >
                  Home
                </Link>
                <span className="text-gray-300">/</span>
                <span className="text-[#FDB913] font-semibold">
                  Terms & Conditions
                </span>
              </div>
            </div>
          </div>
         
        </div>
      </div>

      <div className="max-w-full mx-auto space-y-6">
        {/* 1.Introductions CONTENT CARD */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gray-50 px-8 py-4 border-b border-gray-100">
            <h3 className="font-bold text-[#004A97] flex items-center gap-2">
              <ChevronRight size={18} className="text-[#FDB913]" />
              Full Agreement
            </h3>
          </div>

          <div className="p-8 md:p-12 space-y-8">
            <section className="space-y-4">
              {/* SECTION 1 */}
              <h4 className="text-xl font-bold text-gray-800 border-l-4 border-[#FDB913] pl-4">
                1. Introduction/ About the company & Acceptance of Terms
              </h4>

              <div className="text-gray-600 leading-relaxed space-y-4 text-base">
                <p>
                  This platform, <strong>DukaanSe</strong>, is owned and
                  operated by
                  <strong> Vyaptra Solutions Private Limited</strong>, a company
                  incorporated under the Companies Act, 2013, having its
                  registered office at F-No.2021, A Wing Shriniwas Mills MHADA,
                  Delisle Road, MUMBAI (M. CORP), MUMBAI, 400013, bearing
                  Corporate Identification Number (CIN):{" "}
                  <strong>U47912MH2025PTC454001</strong>.
                </p>

                <p>
                  All references to “DukaanSe,” “we,” “us,” or “our” in these
                  Terms or Policies refer to Vyaptra Solutions Private Limited.
                  For any queries, contact us at
                  <span className="text-[#004A97] font-medium">
                    {" "}
                    support@dukaanseindia.com
                  </span>{" "}
                  or write to the above address.
                </p>

                <p>
                  These terms of Use ("Terms") govern your access to and use of
                  the DukaanSe Mobile Application and website (the "Platform")
                  and any related services provided by Vyaptra Solutions Private
                  Limited. By accessing or using the Platform, you:
                </p>

                <ul className="grid grid-cols-1 gap-3 ml-4 mt-4">
                  <li className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                    <span className="font-bold text-[#004A97]">a)</span>
                    <span>
                      confirm that you are at least{" "}
                      <strong>18 years of age</strong>;
                    </span>
                  </li>
                  <li className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                    <span className="font-bold text-[#004A97]">b)</span>
                    <span>
                      accept and agree to be bound by these{" "}
                      <strong>Terms</strong>; and
                    </span>
                  </li>
                  <li className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                    <span className="font-bold text-[#004A97]">c)</span>
                    <span>
                      accept our <strong>Privacy Policy</strong> and{" "}
                      <strong>Refund & Cancellation Policy</strong>.
                    </span>
                  </li>
                </ul>

                <p className="bg-yellow-50 p-4 rounded-xl  border-[#FDB913] text-sm text-gray-700 italic">
                  These terms reflect DukaanSe's business model, including
                  pickup/delivery options, Gullak coins, referrals, and
                  marketplace fees. This document constitutes the binding Terms
                  of Use once published on the Platform.
                </p>
              </div>

              {/* 2.Definitions */}

              <div className="rounded-3xl  overflow-hidden  mt-9">
                <div className="bg-gray-50 px-3 py-4 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800 border-l-4 border-[#FDB913] pl-4">
                    2. Definitions
                  </h4>
                </div>

                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* User */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100 hover:border-[#FDB913] transition-colors">
                      <h4 className="font-bold text-[#004A97] mb-1">
                        User / You:
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Any person using the Platform to browse, order, pick up
                        or receive goods.
                      </p>
                    </div>

                    {/* Merchant */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100 hover:border-[#FDB913] transition-colors">
                      <h4 className="font-bold text-[#004A97] mb-1">
                        Merchant:
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Third-party store or seller listing goods on the
                        Platform.
                      </p>
                    </div>

                    {/* Order */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100 hover:border-[#FDB913] transition-colors">
                      <h4 className="font-bold text-[#004A97] mb-1">Order:</h4>
                      <p className="text-gray-600 text-sm">
                        A confirmed request placed by a user to purchase goods.
                      </p>
                    </div>

                    {/* AOV */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100 hover:border-[#FDB913] transition-colors">
                      <h4 className="font-bold text-[#004A97] mb-1">
                        AOV (Average Order Value):
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Average value of a user’s purchase.
                      </p>
                    </div>

                    {/* Gullak Coins */}
                    <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 hover:border-[#FDB913] transition-colors md:col-span-2">
                      <h4 className="font-bold text-[#004A97] mb-1 flex items-center gap-2">
                        Gullak Coins / Coins / Wallet:
                      </h4>
                      <p className="text-gray-600 text-sm">
                        DukaanSe's in-app loyalty-based credit system used for
                        redemptions and rewards.
                      </p>
                    </div>

                    {/* Pickup */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100 hover:border-[#FDB913] transition-colors">
                      <h4 className="font-bold text-[#004A97] mb-1">Pickup:</h4>
                      <p className="text-gray-600 text-sm">
                        Orders collected directly by the User from the Merchant.
                      </p>
                    </div>

                    {/* Delivery */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100 hover:border-[#FDB913] transition-colors">
                      <h4 className="font-bold text-[#004A97] mb-1">
                        Delivery:
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Orders delivered to the User by DukaanSe's partner or
                        Merchant.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3.Definitions */}

              <div className="rounded-3xl overflow-hidden mt-9">
                <div className="bg-gray-50 px-3 py-4 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800 border-l-4 border-[#FDB913] pl-4">
                    3. Eligibility & Account Security
                  </h4>
                </div>

                <div className="p-8 md:p-12">
                  <div className="space-y-4">
                    {/* Age Requirement */}
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-orange-50/50 border border-orange-100">
                      <div className="bg-white p-2 rounded-lg shadow-sm mt-1">
                        <span className="text-sm font-black text-orange-500">
                          18+
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-700 leading-relaxed">
                          Users must be{" "}
                          <span className="font-bold text-gray-900">
                            18 years or older
                          </span>{" "}
                          to register or use the Platform.
                        </p>
                      </div>
                    </div>

                    {/* Account Responsibility */}
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                      <div className="bg-white p-2 rounded-lg shadow-sm mt-1">
                        <ShieldCheck size={18} className="text-[#004A97]" />
                      </div>
                      <div>
                        <p className="text-gray-700 leading-relaxed">
                          You are responsible for maintaining the{" "}
                          <span className="font-bold text-gray-900">
                            confidentiality of your account credentials
                          </span>
                          . All activity under your account is your
                          responsibility.
                        </p>
                      </div>
                    </div>

                    {/* Suspension/Termination */}
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-red-50/50 border border-red-100">
                      <div className="bg-white p-2 rounded-lg shadow-sm mt-1">
                        <span className="text-red-600 font-bold">!</span>
                      </div>
                      <div>
                        <p className="text-gray-700 leading-relaxed">
                          DukaanSe reserves the right to{" "}
                          <span className="font-bold text-red-600">
                            suspend or terminate
                          </span>{" "}
                          accounts suspected of fraud, misuse, or breach of
                          Terms.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4.Platform Nature & Merchant Relationship */}

              <div className=" rounded-3xl overflow-hidden mt-9">
                <div className="bg-gray-50 px-3 py-4 border-b border-gray-100">
                  <h3 className="font-bold text-xl border-l-4 border-[#FDB913] pl-4 flex items-center gap-2">
                    4.Platform Nature & Merchant Relationship
                  </h3>
                </div>

                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 gap-6">
                    {/* Marketplace Role */}
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-gray-100 group hover:border-[#FDB913] transition-all">
                      <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-[#FDB913]/10 transition-colors">
                        <Store size={20} className="text-[#004A97]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#004A97] text-lg">
                          Marketplace Platform
                        </h4>
                        <p className="text-gray-600 leading-relaxed mt-1">
                          DukaanSe operates as a marketplace connecting Users
                          and Merchants. Unless explicitly stated,{" "}
                          <span className="font-semibold text-gray-800">
                            DukaanSe is not the seller or manufacturer
                          </span>{" "}
                          of Merchant goods.
                        </p>
                      </div>
                    </div>

                    {/* Independent Merchants */}
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-gray-100 group hover:border-[#FDB913] transition-all">
                      <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-[#FDB913]/10 transition-colors">
                        <Users size={20} className="text-[#004A97]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#004A97] text-lg">
                          Independent Merchants
                        </h4>
                        <p className="text-gray-600 leading-relaxed mt-1">
                          Merchants are independent contractors; DukaanSe{" "}
                          <span className="font-semibold text-gray-800">
                            does not control
                          </span>{" "}
                          Merchant pricing, quality, or fulfilment timelines.
                        </p>
                      </div>
                    </div>

                    {/* Delivery Partners */}
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-gray-100 group hover:border-[#FDB913] transition-all">
                      <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-[#FDB913]/10 transition-colors">
                        <Truck size={20} className="text-[#004A97]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#004A97] text-lg">
                          Delivery Partners
                        </h4>
                        <p className="text-gray-600 leading-relaxed mt-1">
                          Delivery partners are independent service providers
                          and{" "}
                          <span className="font-semibold text-gray-800">
                            not employees or agents
                          </span>{" "}
                          of DukaanSe.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5.. Pricing, Fees & Payment */}
              <div className="rounded-3xl overflow-hiddenmt-9">
                <div className="bg-gray-50 px-3 py-4 border-b border-gray-100">
                  <h3 className="font-bold text-xl border-l-4 border-[#FDB913] pl-4 flex items-center gap-2">
                    5. Pricing, Fees & Payment
                  </h3>
                </div>

                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Delivery Fee */}
                    <div className="p-5 rounded-2xl bg-orange-50 border border-orange-100 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Truck size={40} className="text-orange-600" />
                      </div>
                      <h4 className="font-bold text-orange-700 text-lg mb-2">
                        Delivery Fee
                      </h4>
                      <p className="text-gray-700 font-medium">₹25 per order</p>
                      <p className="text-sm text-orange-600 font-bold mt-1">
                        (FREE for orders above ₹899)
                      </p>
                    </div>

                    {/* Marketplace Fee */}
                    <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Receipt size={40} className="text-[#004A97]" />
                      </div>
                      <h4 className="font-bold text-[#004A97] text-lg mb-2">
                        Marketplace Fee
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        A small fee may be applied per order{" "}
                        <span className="font-bold">
                          (₹8 / ₹10 / ₹12 / ₹15)
                        </span>{" "}
                        based on region or plan.
                      </p>
                    </div>

                    {/* Taxes Info */}
                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-gray-100 md:col-span-2">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <CheckCircle size={20} className="text-green-500" />
                      </div>
                      <p className="text-gray-600 text-sm italic">
                        Prices displayed include{" "}
                        <span className="font-bold text-gray-800 underline decoration-[#FDB913]">
                          applicable taxes
                        </span>{" "}
                        unless stated otherwise.
                      </p>
                    </div>

                    {/* Rights Reserved Alert */}
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-yellow-50 border-l-4 border-[#FDB913] md:col-span-2">
                      <AlertCircle
                        size={20}
                        className="text-[#FDB913] shrink-0 mt-0.5"
                      />
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        DukaanSe reserves the right to{" "}
                        <span className="font-bold uppercase tracking-tighter">
                          update prices, delivery fees, or platform charges
                        </span>{" "}
                        at any time without prior notice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Orders, Fulfilment & Cancellation */}
              <div className=" rounded-3xl overflow-hidden  mt-9 group hover:border-[#FDB913] transition-all duration-300">
                <div className="bg-gray-50 px-3 py-4 border-b border-gray-100">
                  <h3 className="font-bold text-xl border-l-4 border-[#FDB913] pl-4 flex items-center gap-2">
                    6. Orders, Fulfilment & Cancellation
                  </h3>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Cancellation Window */}
                    <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-3 opacity-10">
                        <Clock size={40} className="text-[#004A97]" />
                      </div>
                      <h4 className="font-bold text-[#004A97] mb-2">
                        Cancellation Policy
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Users may cancel pickup or delivery orders within{" "}
                        <span className="font-bold text-[#004A97]">
                          10 minutes
                        </span>{" "}
                        of placing the order or{" "}
                        <span className="font-bold text-[#004A97]">
                          before merchant acceptance
                        </span>
                        , whichever is earlier.
                      </p>
                      <p className="mt-3 text-xs font-bold text-red-500 uppercase tracking-tighter">
                        *Once accepted or dispatched, cancellation may not be
                        possible.
                      </p>
                    </div>

                    {/* Exceptional Circumstances */}
                    <div className="p-5 rounded-2xl bg-orange-50 border border-orange-100 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-3 opacity-10">
                        <AlertCircle size={40} className="text-orange-600" />
                      </div>
                      <h4 className="font-bold text-orange-700 mb-2">
                        Exceptional Cases
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        In cases of{" "}
                        <span className="font-semibold italic">
                          merchant delay
                        </span>{" "}
                        or{" "}
                        <span className="font-semibold italic">
                          out-of-stock
                        </span>{" "}
                        items, DukaanSe may allow cancellation beyond the
                        standard window at its sole discretion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. Gullak Coins & Rewards Program */}
              <div className=" rounded-3xl overflow-hidden mt-9">
                <div className="bg-gray-50 px-3 py-4 border-b border-gray-100">
                  <h3 className="font-bold text-xl border-l-4 border-[#FDB913] pl-4 flex items-center gap-2">
                    7. Gullak Coins & Rewards Program
                  </h3>
                </div>
                <div className="p-8 space-y-6">
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    "Gullak Coins are promotional loyalty credits, not legal
                    tender or prepaid instruments."
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-[#004A97] mb-2 text-sm">
                        Nature & Usage
                      </h4>
                      <ul className="text-xs text-gray-600 space-y-2">
                        <li>• Non-transferable & non-withdrawable.</li>
                        <li>• Redeemable only on DukaanSe Platform.</li>
                        <li>• Valid for 30 days from issuance.</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                      <h4 className="font-bold text-orange-700 mb-2 text-sm">
                        Earning Rules
                      </h4>
                      <ul className="text-xs text-gray-700 space-y-2">
                        <li>
                          • ₹200 - ₹299:{" "}
                          <span className="font-bold text-orange-600">
                            5% credit
                          </span>
                        </li>
                        <li>
                          • ₹300 - ₹499:{" "}
                          <span className="font-bold text-orange-600">
                            3% credit
                          </span>
                        </li>
                        <li>
                          • ₹500+:{" "}
                          <span className="font-bold text-orange-600">
                            2% credit
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <h4 className="font-bold text-[#004A97] mb-2 text-sm">
                      Redemption Limits
                    </h4>
                    <div className="flex justify-between text-xs font-medium text-gray-700">
                      <span>
                        Pickup Orders:{" "}
                        <span className="text-blue-600 font-bold">
                          Up to 25% (max ₹100)
                        </span>
                      </span>
                      <span>|</span>
                      <span>
                        Delivery Orders:{" "}
                        <span className="text-blue-600 font-bold">
                          Up to 5% (max ₹100)
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 8. Referral Program */}
              <div className="rounded-3xl  overflow-hidden mt-9 group hover:border-[#FDB913] transition-all">
                <div className="bg-gray-50 px-3 py-4 border-b border-gray-100">
                  <h3 className="font-bold text-xl border-l-4 border-[#FDB913] pl-4 flex items-center gap-2">
                    8. Referral Program
                  </h3>
                </div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-xl text-green-600 font-bold text-xl">
                      ₹50
                    </div>
                    <p className="text-sm text-gray-600">
                      <span className="font-bold text-gray-800">
                        User Referral:
                      </span>{" "}
                      Referrer and referee earn ₹50 on first order completion.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl text-blue-600 font-bold text-xl">
                      ₹1k
                    </div>
                    <p className="text-sm text-gray-600">
                      <span className="font-bold text-gray-800">
                        Merchant Referral:
                      </span>{" "}
                      Earn ₹1,000 for every 40 successful referred users.
                    </p>
                  </div>
                </div>
              </div>

              {/* 9. Merchant Policy Summary */}
              <div className=" rounded-3xl  overflow-hidden mt-9">
                <div className="bg-gray-50 px-3 py-4 border-b border-gray-100">
                  <h3 className="font-bold text-xl border-l-4 border-[#FDB913] pl-4 flex items-center gap-2">
                    9. Merchant Policy Summary
                  </h3>
                </div>
                <div className="p-8">
                  <p className="text-sm text-gray-600 mb-4">
                    Merchants must comply with product laws and quality
                    standards as per the Onboarding Agreement.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-xl border border-gray-200">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-2">
                      Key Fees
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Marketplace Fee:{" "}
                      <span className="font-bold text-[#004A97]">
                        ₹8–₹15 per order
                      </span>
                      . <br />
                      Seller Monetisation:{" "}
                      <span className="font-bold text-[#004A97]">
                        3% of AOV + ₹99/month
                      </span>{" "}
                      (starting from the 3rd year).
                    </p>
                  </div>
                </div>
              </div>

              {/* 10. Intellectual Property */}
              <div className=" rounded-3xl  overflow-hiddenmt-9">
                <div className="bg-gray-50 px-3 py-4 border-b border-gray-100">
                  <h3 className="font-bold text-xl border-l-4 border-[#FDB913] pl-4 flex items-center gap-2">
                    10. Intellectual Property
                  </h3>
                </div>
                <div className="p-8">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    All trademarks, graphics, and software used on DukaanSe are
                    owned by or licensed to{" "}
                    <span className="font-bold text-gray-800">
                      Vyaptra Solutions Private Limited
                    </span>
                    . Users are granted a limited, non-exclusive,
                    non-transferable license to use the Platform.
                  </p>
                </div>
              </div>

              {/* 11. Limitation of Liability */}
              <div className=" rounded-3xl overflow-hidden mt-9 border-l-4 border-red-500">
                <div className="bg-gray-50 px-3 py-4 border-b border-gray-100">
                  <h3 className="font-bold text-xl border-l-4 border-[#FDB913] pl-4 flex items-center gap-2">
                    11. Limitation of Liability
                  </h3>
                </div>
                <div className="p-8">
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    DukaanSe’s aggregate liability in any 12-month period shall
                    not exceed the total fees or order value paid under which
                    the claim arose, except in cases of:
                  </p>
                  <div className="flex gap-4 text-xs font-bold text-gray-500 uppercase">
                    <span>a. Gross Negligence</span>
                    <span>|</span>
                    <span>b. Wilful Misconduct</span>
                    <span>|</span>
                    <span>c. Statutory Liabilities</span>
                  </div>
                </div>
              </div>

              {/* 12. Indemnification */}
              <div className=" rounded-3xl overflow-hidden mt-9">
                <div className="bg-gray-50 px-3 py-4 border-b border-gray-100">
                  <h3 className="font-bold text-xl border-l-4 border-[#FDB913] pl-4 flex items-center gap-2">
                    12. Indemnification
                  </h3>
                </div>
                <div className="p-8">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    You agree to indemnify DukaanSe and its affiliates against
                    claims, damages, or losses arising from your misuse of the
                    Platform or violation of these Terms.
                  </p>
                </div>
              </div>

              {/* 13. Governing Law & Dispute Resolution */}
              <div className=" rounded-3xl  overflow-hiddenmt-9">
                <div className="bg-gray-50 px-3 py-4 border-b border-gray-100">
                  <h3 className="font-bold text-xl border-l-4 border-[#FDB913] pl-4 flex items-center gap-2">
                    13. Governing Law & Dispute Resolution
                  </h3>
                </div>
                <div className="p-8">
                  <p className="text-sm opacity-90 leading-relaxed">
                    The laws of India govern these Terms. Any disputes shall be
                    subject to the exclusive jurisdiction of the courts in{" "}
                    <span className="font-bold text-[#FDB913]">
                      Mumbai, Maharashtra
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* 14. Amendments */}
              <div className=" rounded-3xl overflow-hidden mt-8">
                <div className="bg-gray-50 px-3 py-4 border-b border-gray-100">
                  <h3 className="font-bold text-xl border-l-4 border-[#FDB913] pl-4 flex items-center gap-2">
                    14. Amendments
                  </h3>
                </div>
                <div className="p-8">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    DukaanSe reserves the right to modify these Terms. Updates
                    will be communicated through the Platform with an updated
                    effective date.
                  </p>
                </div>
              </div>

              {/* 15.  */}

              <div className="rounded-3xl overflow-hidden mt-8 mb-12">
                <div className="bg-gray-50 px-3 py-4 border-b border-gray-100">
                  <h3 className="font-bold text-xl border-l-4 border-[#FDB913] pl-4 flex items-center gap-2">
                    15. Contact Information
                  </h3>
                </div>

                <div className="p-8 space-y-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    In accordance with the{" "}
                    <strong>
                      Consumer Protection (E-Commerce) Rules, 2020
                    </strong>{" "}
                    and the
                    <strong> Digital Personal Data Protection Act, 2023</strong>
                    , the details of the Grievance Officer are as follows:
                  </p>

                  {/* Table Structure */}
                  <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                    <table className="w-full text-left border-collapse">
                      <tbody className="divide-y divide-gray-200">
                        <tr className="flex flex-col md:table-row">
                          <td className="p-4 bg-gray-50 md:w-1/4">
                            <div className="flex items-center gap-2 font-bold text-[#004A97] text-sm">
                              <User size={16} className="text-[#FDB913]" /> Name
                            </div>
                          </td>
                          <td className="p-4 text-gray-700 font-semibold text-sm">
                            Yadubansh Mani
                          </td>
                          <td className="p-4 bg-gray-50 md:w-1/4 md:border-l border-gray-200">
                            <div className="flex items-center gap-2 font-bold text-[#004A97] text-sm">
                              <Mail size={16} className="text-[#FDB913]" />{" "}
                              Email
                            </div>
                          </td>
                          <td className="p-4 text-[#004A97] font-medium text-sm break-all">
                            grievance@dukaanse.co.in
                          </td>
                        </tr>
                        <tr className="flex flex-col md:table-row">
                          <td className="p-4 bg-gray-50">
                            <div className="flex items-center gap-2 font-bold text-[#004A97] text-sm">
                              <Phone size={16} className="text-[#FDB913]" /> Ph
                              No
                            </div>
                          </td>
                          <td className="p-3 text-gray-700 font-semibold text-sm">
                            +91 964 290 1528
                          </td>
                          <td className="p-4 bg-gray-50 md:border-l border-gray-200">
                            <div className="flex items-center gap-2 font-bold text-[#004A97] text-sm">
                              <MapPin size={16} className="text-[#FDB913]" />{" "}
                              Address
                            </div>
                          </td>
                          <td className="p-4 text-gray-700 text-xs leading-relaxed">
                            F-No.2021, A Wing, Shriniwas Mills MHADA, Delisle
                            Road, MUMBAI (M. CORP), MUMBAI, 400013
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Acknowledgment Alert */}
                  <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-[#004A97] flex items-center gap-3">
                    <Clock className="text-[#004A97] shrink-0" size={18} />
                    <p className="text-sm text-gray-700">
                      Complaints are{" "}
                      <span className="font-bold text-[#004A97]">
                        acknowledged within 48 hours
                      </span>{" "}
                      and
                      <span className="font-bold text-[#004A97]">
                        {" "}
                        resolved within 30 days
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* BACK BUTTON */}
       <div className="flex justify-center pb-12">
  <a
    href="/"
    className="px-10 py-3 bg-[#004A97] text-white font-bold rounded-xl 
               hover:bg-[#003670] transition-colors duration-200 
               shadow-md active:scale-95 text-sm uppercase tracking-wide inline-block"
  >
    I Accept & Go Back
  </a>
</div>
      </div>
    </div>
  );
};

export default Terms;
