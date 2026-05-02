import Navbar from "../components/Navbar";
import CTA from "../components/CTA";

export default function PostJob() {
  return (
    <div className="bg-[#0F172A] text-white min-h-screen">

      <Navbar />

      {/* HEADER */}
      <section className="px-6 md:px-12 py-12">
        <h1 className="text-3xl font-bold mb-2">
          Post a Job
        </h1>
        <p className="text-gray-400">
          Create a new job listing
        </p>
      </section>

      {/* FORM */}
      <section className="px-6 md:px-12 max-w-3xl mx-auto">

        <div className="bg-white/5 p-8 rounded-xl border border-white/10 space-y-6">

          {/* JOB TITLE */}
          <div>
            <label className="text-sm text-gray-400">Job Title</label>
            <input
              type="text"
              placeholder="Frontend Developer"
              className="w-full mt-2 p-3 bg-transparent border border-white/20 rounded-lg outline-none"
            />
          </div>

          {/* COMPANY */}
          <div>
            <label className="text-sm text-gray-400">Company</label>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full mt-2 p-3 bg-transparent border border-white/20 rounded-lg outline-none"
            />
          </div>

          {/* LOCATION */}
          <div>
            <label className="text-sm text-gray-400">Location</label>
            <input
              type="text"
              placeholder="Remote / City"
              className="w-full mt-2 p-3 bg-transparent border border-white/20 rounded-lg outline-none"
            />
          </div>

          {/* SKILLS */}
          <div>
            <label className="text-sm text-gray-400">Required Skills</label>
            <input
              type="text"
              placeholder="React, Django, SQL..."
              className="w-full mt-2 p-3 bg-transparent border border-white/20 rounded-lg outline-none"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="text-sm text-gray-400">Job Description</label>
            <textarea
              rows="4"
              placeholder="Write job details..."
              className="w-full mt-2 p-3 bg-transparent border border-white/20 rounded-lg outline-none"
            />
          </div>

          {/* SALARY */}
          <div>
            <label className="text-sm text-gray-400">Salary</label>
            <input
              type="text"
              placeholder="₹5L - ₹10L"
              className="w-full mt-2 p-3 bg-transparent border border-white/20 rounded-lg outline-none"
            />
          </div>

          {/* BUTTON */}
          <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
            Post Job
          </button>

        </div>

      </section>

      <CTA />

    </div>
  );
}
