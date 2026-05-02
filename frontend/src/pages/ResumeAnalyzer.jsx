import Navbar from "../components/Navbar";
import CTA from "../components/CTA";

export default function ResumeAnalyzer() {
  return (
    <div className="bg-[#0F172A] text-white min-h-screen">

      <Navbar />

      {/* HEADER */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-2">
          Resume Analyzer
        </h1>
        <p className="text-gray-400">
          Upload your resume and get AI insights
        </p>
      </section>

      {/* UPLOAD BOX */}
      <section className="flex justify-center px-6 mb-12">
        <div className="w-full max-w-xl bg-white/5 p-8 rounded-xl border border-white/10 text-center">

          <input
            type="file"
            className="mb-6 text-sm text-gray-400"
          />

          <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
            Analyze Resume
          </button>

        </div>
      </section>

      {/* RESULT (STATIC FOR NOW) */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto">

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-6">
          <h2 className="text-xl font-semibold mb-3">
            Resume Score
          </h2>
          <p className="text-3xl font-bold text-green-400">
            78%
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-6">
          <h2 className="text-xl font-semibold mb-3">
            Extracted Skills
          </h2>
          <p className="text-gray-400">
            React, JavaScript, HTML, CSS
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-semibold mb-3">
            Suggestions
          </h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>Add more projects</li>
            <li>Improve keyword usage</li>
            <li>Include backend skills</li>
          </ul>
        </div>

      </section>

      <CTA />

    </div>
  );
}
