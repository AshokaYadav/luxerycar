"use client";
import { CheckCircle } from "react-feather";

export default function TermsSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4"
      style={{
        backgroundImage:
          "url('https://luxurycardrive.in/wp-content/uploads/2024/12/faq.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-4xl mx-auto bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl text-white">
        <h2 className="text-3xl font-bold mb-6 text-center tracking-wide">
          Terms & Conditions
        </h2>

        <ul className="space-y-5 text-lg leading-relaxed">
          <li className="flex gap-3">
            <CheckCircle className="w-6 h-6 text-green-400" />
            A minimum running of <strong>250 kms per calendar day</strong> will be
            charged for outstation trips.
          </li>

          <li className="flex gap-3">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span>
              <strong>Time and kilometers</strong> are calculated on a{" "}
              <strong>garage-to-garage</strong> basis.
            </span>
          </li>

          <li>
            <div className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>For outstation trips:</span>
            </div>

            <ul className="list-disc ml-14 mt-2 space-y-2 text-white/90">
              <li>
                <strong>Driver DA/TA</strong> (Daily Allowance/Travel Allowance) is
                applicable.
              </li>
              <li>
                For local trips, <strong>driver DA/TA</strong> applies{" "}
                <strong>after 9 PM</strong>.
              </li>
            </ul>
          </li>

          <li className="flex gap-3">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span>
              On <strong>high season dates</strong>, a{" "}
              <strong>minimum 12-hour package</strong> will be applicable for local
              trips.
            </span>
          </li>

          <li>
            <div className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>Hill charges:</span>
            </div>

            <ul className="list-disc ml-14 mt-2 space-y-2 text-white/90">
              <li>Rs. 400 per hour in local trips.</li>
              <li>
                <strong>50% extra</strong> for outstation trips.
              </li>
            </ul>
          </li>

          <li className="flex gap-3">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span>
              All <strong>toll tax, parking fees, and interstate tax</strong> will be
              charged <strong>as per actuals</strong>.
            </span>
          </li>

          <li className="flex gap-3">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span>
              <strong>GST</strong> will be applied on billing as applicable.
            </span>
          </li>
        </ul>

        <p className="mt-8 text-center font-semibold tracking-wide text-white/90">
          We also deal in Hotel Reservations, Tour Packages, Destination Weddings, Event
          Management & Fleet Management.
        </p>
      </div>
    </section>
  );
}
