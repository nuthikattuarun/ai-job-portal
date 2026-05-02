import Navbar from "../components/Navbar";
import CTA from "../components/CTA";

export default function RecruiterDashboard() {
  return (
    <div className="bg-[#0F172A] text-white min-h-screen">

      <Navbar />

      {/* HEADER */}
      <section className="px-6 md:px-12 py-12">
        <h1 className="text-3xl font-bold mb-2">
          Recruiter Dashboard
        </h1>
        <p className="text-gray-400">
          Manage your job postings and applicants
        </p>
      </section>

      {/* STATS */}
      <section className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <p className="text-gray-400 text-sm">Jobs Posted</p>
          <h2 className="text-2xl font-bold">5</h2>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <p className="text-gray-400 text-sm">Applicants</p>
          <h2 className="text-2xl font-bold">24</h2>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <p className="text-gray-400 text-sm">Shortlisted</p>
          <h2 className="text-2xl font-bold">8</h2>
        </div>

      </section>

      {/* JOB LIST */}
      <section className="px-6 md:px-12 space-y-6">

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Frontend Developer</h3>
            <p className="text-gray-400">12 Applicants</p>
          </div>
          <button className="px-4 py-2 border border-white/20 rounded-lg">
            View Applicants
          </button>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Backend Developer</h3>
            <p className="text-gray-400">8 Applicants</p>
          </div>
          <button className="px-4 py-2 border border-white/20 rounded-lg">
            View Applicants
          </button>
        </div>

      </section>

      <CTA />

    </div>
  );
}
