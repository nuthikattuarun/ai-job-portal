import Navbar from "../components/Navbar";
import CTA from "../components/CTA";

export default function JobDetails() {
  return (
    <div className="bg-[#0F172A] text-white min-h-screen">

      <Navbar />

      <section className="px-6 md:px-12 py-16 max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-4">
          Frontend Developer
        </h1>

        <p className="text-gray-400 mb-6">
          Company: Google • Location: Remote
        </p>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-6">
          <h2 className="text-xl font-semibold mb-3">Job Description</h2>
          <p className="text-gray-400">
            We are looking for a skilled frontend developer with experience in React and modern UI frameworks.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-6">
          <h2 className="text-xl font-semibold mb-3">Required Skills</h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
          </ul>
        </div>

        <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
          Apply Now
        </button>

      </section>

      <CTA />

    </div>
  );
}
