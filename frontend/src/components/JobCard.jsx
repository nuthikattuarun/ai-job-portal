import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

export default function JobCard({ job = {} }) {
  const { id, title, company, match = "100%" } = job;
  console.log("JobCard id:", id, job);
  const matchPercentage = parseInt(match);
  const matchColor = matchPercentage >= 85 ? "green" : matchPercentage >= 70 ? "yellow" : "blue";

  const colorClasses = {
    green: "bg-green-500/20 border-green-500/30 text-green-400",
    yellow: "bg-yellow-500/20 border-yellow-500/30 text-yellow-400",
    blue: "bg-blue-500/20 border-blue-500/30 text-blue-400",
  };

  return (
    <div className="group relative overflow-hidden p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-white/30 transition duration-300 hover:shadow-2xl hover:shadow-purple-500/30">
      
      {/* Hover glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-indigo-500/0 group-hover:from-purple-500/5 group-hover:to-indigo-500/5 transition duration-300"></div>

      {/* Content */}
      <div className="relative z-10">
        
        {/* Header */}
        <div className="flex justify-between items-start gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold group-hover:text-purple-300 transition duration-300 line-clamp-2">
              {title}
            </h3>
            <p className="text-gray-400 text-sm mt-1">{company}</p>
          </div>
          
          {/* Match Badge */}
          <div className={`flex-shrink-0 px-3 py-1 rounded-full border text-sm font-semibold ${colorClasses[matchColor]} whitespace-nowrap flex items-center gap-1`}>
            <FiCheck size={14} />
            {match}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-5 line-clamp-2">
          We're looking for an experienced developer to join our growing team and help build scalable solutions.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:border-purple-500/50 transition duration-300">
            React
          </span>
          <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:border-purple-500/50 transition duration-300">
            Node.js
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition duration-300">
            Apply Now
          </button>
          
          {job?.id && (
            <Link
  to={`/jobs/${job.id}`}
  className="flex-1 px-4 py-2 border border-white/20 text-white"
>
  Details
  <FiArrowRight size={16} />
</Link>
          ) }
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-purple-500 transition duration-300"></div>
    </div>
  );
}

