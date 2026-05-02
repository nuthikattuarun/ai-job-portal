import Navbar from "../components/Navbar";
import CTA from "../components/CTA";

export default function Applications() {
  return (
    <div className="bg-[#0F172A] text-white min-h-screen">

      <Navbar />

      {/* HEADER */}
      <section className="px-6 md:px-12 py-12">
        <h1 className="text-3xl font-bold mb-2">
          My Applications
        </h1>
        <p className="text-gray-400">
          Track your job applications
        </p>
      </section>

      {/* APPLICATION LIST */}
      <section className="px-6 md:px-12 space-y-6">

        {/* CARD */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex justify-between items-center">
          
          <div>
            <h3 className="text-lg font-semibold">
              Frontend Developer
            </h3>
            <p className="text-gray-400">
              Google
            </p>
          </div>

          <span className="text-yellow-400 text-sm">
            Pending
          </span>

        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex justify-between items-center">
          
          <div>
            <h3 className="text-lg font-semibold">
              Backend Developer
            </h3>
            <p className="text-gray-400">
              Amazon
            </p>
          </div>

          <span className="text-green-400 text-sm">
            Selected
          </span>

        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex justify-between items-center">
          
          <div>
            <h3 className="text-lg font-semibold">
              Full Stack Developer
            </h3>
            <p className="text-gray-400">
              Startup
            </p>
          </div>

          <span className="text-red-400 text-sm">
            Rejected
          </span>

        </div>

      </section>

      <CTA />

    </div>
  );
}
