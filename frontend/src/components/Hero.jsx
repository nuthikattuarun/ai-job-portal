import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex flex-col items-center justify-center py-32 px-6 md:px-12 overflow-hidden">
      
      {/* Decorative glowing elements */}
      <div className="absolute w-80 h-80 bg-purple-500/10 blur-3xl rounded-full top-20 -left-40 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-indigo-500/10 blur-3xl rounded-full bottom-20 -right-40 animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/20 mb-6 hover:bg-white/10 transition duration-300">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          <span className="text-sm text-gray-300">AI-Powered Job Matching</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Find Jobs That Match Your Skills
          </span>
          <span className="text-white"> — Instantly with AI</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Upload your resume and let our AI engine recommend the best opportunities tailored to your experience and career goals.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          {/* Primary Button */}
          <Link
            to="/resume-analyzer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg font-semibold text-white shadow-xl shadow-purple-500/40 hover:shadow-purple-500/60 hover:scale-105 transition duration-300"
          >
            Upload Resume
            <FiArrowRight className="group-hover:translate-x-1 transition duration-300" />
          </Link>

          {/* Secondary Button */}
          <Link
            to="/job-details"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 rounded-lg font-semibold text-white hover:border-white/40 hover:bg-white/5 transition duration-300"
          >
            Explore Jobs
            <FiArrowRight />
          </Link>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500 mb-4">Trusted by 1000+ job seekers</p>
          <div className="flex justify-center items-center gap-6 opacity-60">
            <div className="text-sm font-semibold text-gray-400">Google</div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="text-sm font-semibold text-gray-400">Amazon</div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="text-sm font-semibold text-gray-400">Microsoft</div>
          </div>
        </div>
      </div>
    </section>
  );
}
