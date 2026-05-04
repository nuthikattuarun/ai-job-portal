import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import CTA from "../components/CTA";
import { FiTrendingUp, FiFileText, FiBriefcase } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Dashboard() {

const [jobs,setJobs] = useState([]);

  useEffect(() => {
  fetch("http://127.0.0.1:8000/api/jobs/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setJobs(data.results || data);
    })
    .catch((err) => console.log(err));
}, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white overflow-hidden">
  

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full top-0 left-0 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full bottom-20 right-10 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-10"></div>

      <div className="relative z-10">
        <Navbar />

        {/* HEADER */}
        <section className="px-6 md:px-12 py-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Welcome back, <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Sarah!</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Here are your personalized job recommendations
            </p>
          </div>
        </section>

        {/* STATS */}
        <section className="px-6 md:px-12 mb-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {/* Resume Score Card */}
            <div className="group relative p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-white/30 transition duration-300 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition duration-300 rounded-2xl"></div>
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-2">Resume Score</p>
                  <h2 className="text-4xl font-bold">78<span className="text-2xl">%</span></h2>
                  <p className="text-xs text-gray-500 mt-2">Updated today</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl">
                  <FiFileText className="text-white" size={24} />
                </div>
              </div>
            </div>

            {/* Applications Card */}
            <div className="group relative p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-white/30 transition duration-300 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition duration-300 rounded-2xl"></div>
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-2">Applications</p>
                  <h2 className="text-4xl font-bold">12</h2>
                  <p className="text-xs text-gray-500 mt-2">This month</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                  <FiBriefcase className="text-white" size={24} />
                </div>
              </div>
            </div>

            {/* Matches Card */}
            <div className="group relative p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-white/30 transition duration-300 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-orange-500/0 group-hover:from-pink-500/5 group-hover:to-orange-500/5 transition duration-300 rounded-2xl"></div>
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-2">Perfect Matches</p>
                  <h2 className="text-4xl font-bold">5</h2>
                  <p className="text-xs text-gray-500 mt-2">Waiting for you</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl">
                  <FiTrendingUp className="text-white" size={24} />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* RECOMMENDED JOBS */}
        <section className="px-6 md:px-12 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Recommended Jobs</span>
              </h2>
              <p className="text-gray-400">Top opportunities matched to your profile</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.slice(0, 3).map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-12 pb-16">
          <div className="max-w-7xl mx-auto">
            <CTA />
          </div>
        </section>

{jobs.map((job) => (
  <JobCard key={job.id} job={job} />
))}

    </div>
    </div>
  );
}
