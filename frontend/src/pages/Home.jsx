import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import JobsSection from "../components/JobsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white overflow-hidden">

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Purple top-left glow */}
        <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full top-0 left-0 animate-pulse"></div>
        
        {/* Indigo center glow */}
        <div className="absolute w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: "1s" }}></div>
        
        {/* Pink bottom-right glow */}
        <div className="absolute w-96 h-96 bg-pink-500/15 blur-3xl rounded-full bottom-0 right-0 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Grid overlay (subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20"></div>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Featured />
        <JobsSection />

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-white/10">
          <div className="px-6 md:px-12 pb-8 text-center text-gray-400 text-sm">
            <p>© 2024 AI Career. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
