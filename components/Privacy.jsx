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
  Eye,
  Lock,
  Database,
  Cookie,
  Globe,
  Users as UsersIcon,
  Settings,
  Bell,
} from "lucide-react";

const Privacy = () => {
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
                DukaanSe - Privacy Policy
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
                  Privacy Policy
                </span>
              </div>
            </div>
          </div>
         
        </div>
      </div>

      <div className="max-w-full mx-auto space-y-6">
        {/* MAIN CONTENT CARD */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gray-50 px-8 py-4 border-b border-gray-100">
            <h3 className="font-bold text-[#004A97] flex items-center gap-2">
              <ChevronRight size={18} className="text-[#FDB913]" />
              Privacy Policy & Data Protection
            </h3>
          </div>

          <div className="p-8 md:p-12 space-y-8">
            <section className="space-y-4">
              {/* SECTION 1 - Introduction */}
              <h4 className="text-xl font-bold text-gray-800 border-l-4 border-[#FDB913] pl-4">
                1. Introduction/ About the Company
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
                </p>

                <p>
                  This Privacy Policy describes how we collect, use, share, and
                  protect your personal information when you use our mobile
                  application, website, or related services (collectively, the
                  "Platform"). By using DukaanSe, you agree to this Policy and
                  consent to our data practices as described herein.
                </p>

                <p>
                  This Policy aligns with the{" "}
                  <strong>Digital Personal Data Protection Act, 2023</strong>{" "}
                  (DPDP Act) and applicable Indian data protection and consumer
                  laws.
                </p>

                <p>
                  For any queries, contact us at
                  <span className="text-[#004A97] font-medium">
                    {" "}
                    support@dukaanseindia.com
                  </span>{" "}
                  or write to the above address.
                </p>
              </div>

              {/* SECTION 2 - Information We Collect */}
              <div className="rounded-3xl overflow-hidden mt-9">
                <div className="bg-gray-50 py-4 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800 border-l-4 border-[#FDB913] pl-4">
                    2. Information We Collect
                  </h4>
                </div>

                <div className="p-8 md:p-12">
                  <p className="text-gray-600 mb-6">
                    We collect the following types of information to provide
                    and improve our services:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Account Information */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100 hover:border-[#FDB913] transition-colors">
                      <h4 className="font-bold text-[#004A97] mb-2 flex items-center gap-2">
                        <User size={16} /> a. Account Information
                      </h4>
                      <p className="text-gray-600 text-sm">
                        When you register or create an account, we collect
                        details such as your name, email address, mobile number,
                        and password.
                      </p>
                    </div>

                    {/* Profile Information */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100 hover:border-[#FDB913] transition-colors">
                      <h4 className="font-bold text-[#004A97] mb-2 flex items-center gap-2">
                        <Settings size={16} /> b. Profile Information
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Like your age, gender (optional), delivery address,
                        profile photo, and preferences.
                      </p>
                    </div>

                    {/* Location Information */}
                    <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 hover:border-[#FDB913] transition-colors">
                      <h4 className="font-bold text-[#004A97] mb-2 flex items-center gap-2">
                        <MapPin size={16} /> c. Location Information
                      </h4>
                      <p className="text-gray-600 text-sm">
                        With your consent, we collect your device's location
                        data to show nearby stores and enable pickups or
                        deliveries.
                      </p>
                    </div>

                    {/* Transaction & Payment Data */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100 hover:border-[#FDB913] transition-colors">
                      <h4 className="font-bold text-[#004A97] mb-2 flex items-center gap-2">
                        <Receipt size={16} /> d. Transaction & Payment Data
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Details of your orders, payment method (UPI, card,
                        wallet, etc.), and billing address. DukaanSe does not
                        store full card details; all payments are processed via
                        PCI-DSS–compliant payment partners.
                      </p>
                    </div>

                    {/* Usage & Device Data */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100 hover:border-[#FDB913] transition-colors">
                      <h4 className="font-bold text-[#004A97] mb-2 flex items-center gap-2">
                        <Database size={16} /> e. Usage & Device Data
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Information about how you use the app, device
                        identifiers, app logs, crash reports, and session data.
                      </p>
                    </div>

                    {/* Communication & Support Data */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100 hover:border-[#FDB913] transition-colors md:col-span-2">
                      <h4 className="font-bold text-[#004A97] mb-2 flex items-center gap-2">
                        <Mail size={16} /> f. Communication & Support Data
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Messages, reviews, feedback, chat support records, and
                        correspondence with customer service are included.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3 - How do we use your information */}
              <div className="rounded-3xl overflow-hidden mt-9">
                <div className="bg-gray-50  py-4 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800 border-l-4 border-[#FDB913] pl-4">
                    3. How do we use your information?
                  </h4>
                </div>

                <div className="p-8 md:p-12">
                  <p className="text-gray-600 mb-4">
                    By using the Platform, you consent to our use of your
                    personal data in accordance with this Policy for the
                    following purposes:
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                      <span className="font-bold text-[#004A97]">•</span>
                      <span className="text-gray-700">
                        To process and deliver orders placed on the Platform.
                      </span>
                    </div>
                    <div className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                      <span className="font-bold text-[#004A97]">•</span>
                      <span className="text-gray-700">
                        To maintain your account and manage loyalty coins,
                        referrals, and wallet transactions.
                      </span>
                    </div>
                    <div className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                      <span className="font-bold text-[#004A97]">•</span>
                      <span className="text-gray-700">
                        To communicate with you regarding orders, offers, and
                        service updates.
                      </span>
                    </div>
                    <div className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                      <span className="font-bold text-[#004A97]">•</span>
                      <span className="text-gray-700">
                        To analyse user behaviour and improve our services and
                        user experience.
                      </span>
                    </div>
                    <div className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                      <span className="font-bold text-[#004A97]">•</span>
                      <span className="text-gray-700">
                        To personalise your experience, including showing
                        relevant content or promotions.
                      </span>
                    </div>
                    <div className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                      <span className="font-bold text-[#004A97]">•</span>
                      <span className="text-gray-700">
                        To detect and prevent fraud or misuse.
                      </span>
                    </div>
                    <div className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                      <span className="font-bold text-[#004A97]">•</span>
                      <span className="text-gray-700">
                        To comply with applicable legal and tax obligations.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 4 - Legal Basis for Processing */}
              <div className="rounded-3xl overflow-hidden mt-9">
                <div className="bg-gray-50 py-4 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800 border-l-4 border-[#FDB913] pl-4">
                    4. Legal Basis for Processing
                  </h4>
                </div>

                <div className="p-8 md:p-12">
                  <p className="text-gray-600 mb-4">
                    We process personal information based on one or more of the
                    following grounds:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100">
                      <h4 className="font-bold text-[#004A97] mb-2">
                        Contractual necessity
                      </h4>
                      <p className="text-gray-600 text-sm">
                        To fulfil our obligations when you place an order.
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100">
                      <h4 className="font-bold text-[#004A97] mb-2">
                        Legal compliance
                      </h4>
                      <p className="text-gray-600 text-sm">
                        To meet obligations under applicable law (e.g.,
                        invoicing, taxation, consumer protection).
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100">
                      <h4 className="font-bold text-[#004A97] mb-2">
                        Consent
                      </h4>
                      <p className="text-gray-600 text-sm">
                        For location access, marketing communications, and
                        promotions.
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100">
                      <h4 className="font-bold text-[#004A97] mb-2">
                        Legitimate interests
                      </h4>
                      <p className="text-gray-600 text-sm">
                        For service analytics, fraud detection, and operational
                        improvements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 5 - Data Sharing & Disclosure */}
              <div className="rounded-3xl overflow-hidden mt-9">
                <div className="bg-gray-50 py-4 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800 border-l-4 border-[#FDB913] pl-4">
                    5. Data Sharing & Disclosure
                  </h4>
                </div>

                <div className="p-8 md:p-12">
                  <p className="text-gray-600 mb-4">
                    We may share information with:
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                      <Store size={18} className="text-[#004A97] shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <span className="font-bold">Merchants:</span> To process
                        and fulfil your orders.
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                      <Truck size={18} className="text-[#004A97] shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <span className="font-bold">Delivery Partners:</span> To
                        deliver products to your chosen address.
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                      <Database size={18} className="text-[#004A97] shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <span className="font-bold">Service Providers:</span>{" "}
                        Payment gateways, analytics partners, hosting providers,
                        and customer support vendors.
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                      <ShieldCheck size={18} className="text-[#004A97] shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <span className="font-bold">Legal Authorities:</span>{" "}
                        When required by law or to respond to legal process.
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                      <RefreshCw size={18} className="text-[#004A97] shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <span className="font-bold">Business Transfers:</span>{" "}
                        In case of mergers, acquisitions, or restructuring of
                        DukaanSe.
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-yellow-50 rounded-xl border-l-4 border-[#FDB913]">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">We do not sell</span> your
                      personal data for marketing purposes.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 6 - Data Retention Schedule */}
              <div className="rounded-3xl overflow-hidden mt-9">
                <div className="bg-gray-50 py-4 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800 border-l-4 border-[#FDB913] pl-4">
                    6. Data Retention Schedule
                  </h4>
                </div>

                <div className="p-8 md:p-12">
                  <p className="text-gray-600 mb-4">
                    DukaanSe retains personal data only as long as necessary for
                    the purposes stated in this Policy:
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-gray-200">
                    <table className="w-full text-left">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="p-3 text-sm font-bold text-[#004A97]">
                            Data Type
                          </th>
                          <th className="p-3 text-sm font-bold text-[#004A97]">
                            Retention Period
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 text-sm text-gray-700">
                            Account & Profile Data
                          </td>
                          <td className="p-3 text-sm text-gray-600">
                            until account deletion + 2 years for audit
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 text-sm text-gray-700">
                            Transaction & Payment Data
                          </td>
                          <td className="p-3 text-sm text-gray-600">
                            7 years (as per tax & accounting law)
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 text-sm text-gray-700">
                            KYC / Merchant Documents
                          </td>
                          <td className="p-3 text-sm text-gray-600">
                            10 years post-termination (per AML/PMLA)
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 text-sm text-gray-700">
                            Support Chats & Logs
                          </td>
                          <td className="p-3 text-sm text-gray-600">1 year</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-sm text-gray-700">
                            Analytics & Device Data
                          </td>
                          <td className="p-3 text-sm text-gray-600">
                            24 months (anonymised thereafter)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="mt-4 text-sm text-gray-600 italic">
                    Upon expiry of these periods, data is securely deleted or
                    irreversibly anonymised.
                  </p>
                </div>
              </div>

              {/* SECTION 7 - Your Rights & Choices */}
              <div className="rounded-3xl overflow-hidden mt-9">
                <div className="bg-gray-50 py-4 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800 border-l-4 border-[#FDB913] pl-4">
                    7. Your Rights & Choices
                  </h4>
                </div>

                <div className="p-8 md:p-12">
                  <p className="text-gray-600 mb-4">
                    You have the following rights regarding your personal data,
                    subject to applicable law:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-green-50 border border-green-100">
                      <span className="font-bold text-green-700">Access:</span>{" "}
                      <span className="text-sm text-gray-700">
                        Request a copy of your personal data held by us.
                      </span>
                    </div>
                    <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                      <span className="font-bold text-blue-700">
                        Correction:
                      </span>{" "}
                      <span className="text-sm text-gray-700">
                        Update or correct inaccurate or incomplete information.
                      </span>
                    </div>
                    <div className="p-3 rounded-lg bg-red-50 border border-red-100">
                      <span className="font-bold text-red-700">Deletion:</span>{" "}
                      <span className="text-sm text-gray-700">
                        Request deletion of your account and associated data,
                        subject to retention obligations.
                      </span>
                    </div>
                    <div className="p-3 rounded-lg bg-orange-50 border border-orange-100">
                      <span className="font-bold text-orange-700">
                        Withdraw Consent:
                      </span>{" "}
                      <span className="text-sm text-gray-700">
                        Withdraw consent for marketing or location access at any
                        time.
                      </span>
                    </div>
                    <div className="p-3 rounded-lg bg-purple-50 border border-purple-100 md:col-span-2">
                      <span className="font-bold text-purple-700">
                        Data Portability:
                      </span>{" "}
                      <span className="text-sm text-gray-700">
                        Request a copy of your data in a structured format.
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">To submit a Data Subject Access Request (DSAR),</span>{" "}
                      email it to{" "}
                      <span className="text-[#004A97] font-medium">
                        privacy@dukaanse.co.in
                      </span>
                      . We will acknowledge receipt within 15 days and endeavour
                      to comply within 45 days after verifying identity.
                    </p>
                  </div>

                  <p className="mt-3 text-sm text-gray-600">
                    To exercise these rights, contact us at{" "}
                    <span className="text-[#004A97] font-medium">
                      privacy@dukaanse.co.in
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* SECTION 8 - Cookies & Tracking Technologies */}
              <div className="rounded-3xl overflow-hidden mt-9">
                <div className="bg-gray-50 py-4 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800 border-l-4 border-[#FDB913] pl-4">
                    8. Cookies & Tracking Technologies
                  </h4>
                </div>

                <div className="p-8 md:p-12">
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-orange-50/50 border border-orange-100">
                    <Cookie size={24} className="text-orange-600 shrink-0" />
                    <p className="text-gray-700 leading-relaxed">
                      We use cookies and similar technologies to enhance your
                      browsing experience, analyse app usage, and deliver
                      personalised offers. You can control cookies through your
                      browser settings. Turning off essential cookies may affect
                      app functionality.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 9 - Data Security */}
              <div className="rounded-3xl overflow-hidden mt-9">
                <div className="bg-gray-50 py-4 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800 border-l-4 border-[#FDB913] pl-4">
                    9. Data Security
                  </h4>
                </div>

                <div className="p-8 md:p-12">
                  <p className="text-gray-600 mb-4">
                    We implement strict technical and organisational safeguards,
                    including:
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50">
                      <Lock size={18} className="text-green-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Encryption of data during transmission and storage is
                        implemented using industry-standard protocols.
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50">
                      <UsersIcon size={18} className="text-green-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Limited access to personal data on a need-to-know basis.
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50">
                      <Eye size={18} className="text-green-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Regular audits and monitoring for vulnerabilities.
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-yellow-50 rounded-xl border-l-4 border-[#FDB913]">
                    <p className="text-sm text-gray-700">
                      While we strive to ensure complete security, no online
                      system is entirely risk-free. Users are advised to use
                      strong passwords and avoid sharing login details.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 10 - Cross-Border Data Transfers */}
              <div className="rounded-3xl overflow-hidden mt-9">
                <div className="bg-gray-50 py-4 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800 border-l-4 border-[#FDB913] pl-4">
                    10. Cross-Border Data Transfers
                  </h4>
                </div>

                <div className="p-8 md:p-12">
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-blue-50/50 border border-blue-100">
                    <Globe size={24} className="text-[#004A97] shrink-0" />
                    <p className="text-gray-700 leading-relaxed">
                      If we transfer your data outside India, it will be
                      protected through contractual safeguards or approved
                      mechanisms under applicable law.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 11 - Children's Privacy */}
              <div className="rounded-3xl overflow-hidden mt-9">
                <div className="bg-gray-50 py-4 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800 border-l-4 border-[#FDB913] pl-4">
                    11. Children's Privacy
                  </h4>
                </div>

                <div className="p-8 md:p-12">
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-red-50/50 border border-red-100">
                    <ShieldAlert size={24} className="text-red-600 shrink-0" />
                    <p className="text-gray-700 leading-relaxed">
                      Our Platform is not intended for individuals under 18. If
                      we become aware of data collected from minors, we will
                      delete it immediately.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 12 - Updates to this Policy */}
              <div className="rounded-3xl overflow-hidden mt-9">
                <div className="bg-gray-50 px-3 py-4 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800 border-l-4 border-[#FDB913] pl-4">
                    12. Updates to this Policy
                  </h4>
                </div>

                <div className="p-8 md:p-12">
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-gray-100">
                    <RefreshCw size={24} className="text-[#004A97] shrink-0" />
                    <p className="text-gray-700 leading-relaxed">
                      We may update this Privacy Policy periodically. Material
                      changes will be notified in-app and via email (if
                      applicable). The revised Policy becomes effective upon
                      posting.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 13 - Contact & Grievance Redressal */}
              <div className="rounded-3xl overflow-hidden mt-9">
                <div className="bg-gray-50 px-3 py-4 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800 border-l-4 border-[#FDB913] pl-4">
                    13. Contact & Grievance Redressal
                  </h4>
                </div>

                <div className="p-8 md:p-8 space-y-6">
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

                  {/* End of Privacy Policy */}
                  <div className="mt-8 p-6 rounded-2xl text-center">
                    <p className="text-sm text-gray-600 italic">
                      End of Privacy Policy - DukaanSe (by Vyaptra Solutions Pvt Ltd)
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* BACK BUTTON */}
        <div className="flex justify-center pb-8">
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

export default Privacy;