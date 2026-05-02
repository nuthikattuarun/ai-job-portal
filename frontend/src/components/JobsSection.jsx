import JobCard from "./JobCard";
import { Link } from "react-router-dom";

export default function JobsSection() {
  return (
    <section className="relative py-24 px-6 md:px-12">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Recommended Jobs
            </span>
          </h2>
          <p className="text-gray-400">Jobs perfectly matched for your skills and experience</p>
        </div>
        
        <Link
          to="/job-details"
          className="px-6 py-3 bg-white/5 border border-white/20 rounded-lg font-medium hover:border-purple-500/50 hover:bg-white/10 transition duration-300 whitespace-nowrap"
        >
          View All Jobs →
        </Link>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <JobCard title="Frontend Developer" company="Google" match="85%" />
        <JobCard title="Backend Developer" company="Amazon" match="78%" />
        <JobCard title="Full Stack Developer" company="Startup" match="90%" />
      </div>

      {/* Bottom CTA */}
      <div className="text-center p-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-white/10 rounded-2xl backdrop-blur-md">
        <h3 className="text-2xl font-bold mb-3">Want to see more opportunities?</h3>
        <p className="text-gray-400 mb-6">Get personalized job recommendations by completing your profile</p>
        <Link
          to="/dashboard"
          className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition duration-300"
        >
          Complete Profile
        </Link>
      </div>
    </section>
  );
}
