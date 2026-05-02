import Navbar from "../components/Navbar";
import CTA from "../components/CTA";

export default function Profile() {
  return (
    <div className="bg-[#0F172A] text-white min-h-screen">

      <Navbar />

      {/* HEADER */}
      <section className="px-6 md:px-12 py-12">
        <h1 className="text-3xl font-bold mb-2">
          My Profile
        </h1>
        <p className="text-gray-400">
          Manage your personal details
        </p>
      </section>

      {/* PROFILE FORM */}
      <section className="px-6 md:px-12 max-w-3xl mx-auto">

        <div className="bg-white/5 p-8 rounded-xl border border-white/10 space-y-6">

          {/* NAME */}
          <div>
            <label className="text-sm text-gray-400">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 p-3 bg-transparent border border-white/20 rounded-lg outline-none"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 bg-transparent border border-white/20 rounded-lg outline-none"
            />
          </div>

          {/* SKILLS */}
          <div>
            <label className="text-sm text-gray-400">Skills</label>
            <input
              type="text"
              placeholder="React, Python, Django..."
              className="w-full mt-2 p-3 bg-transparent border border-white/20 rounded-lg outline-none"
            />
          </div>

          {/* EXPERIENCE */}
          <div>
            <label className="text-sm text-gray-400">Experience</label>
            <input
              type="text"
              placeholder="0-3 years"
              className="w-full mt-2 p-3 bg-transparent border border-white/20 rounded-lg outline-none"
            />
          </div>

          {/* BUTTON */}
          <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
            Save Profile
          </button>

        </div>

      </section>

      <CTA />

    </div>
  );
}
