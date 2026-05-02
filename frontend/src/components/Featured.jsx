import { FiTrendingUp, FiAward, FiZap } from "react-icons/fi";
import { GiBrain } from "react-icons/gi";

export default function Featured() {
  const features = [
    {
      icon: GiBrain,
      title: "AI Resume Analyzer",
      description:
        "Analyze your resume and get improvement suggestions instantly.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: FiTrendingUp,
      title: "Smart Job Matching",
      description:
        "AI recommends jobs based on your skills and experience.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FiAward,
      title: "Resume Score",
      description:
        "Get a score that shows how strong your resume is.",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: FiZap,
      title: "Skill Gap Insights",
      description:
        "Identify missing skills and improve your career path.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
            AI-Powered Features
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Leverage cutting-edge AI to transform your job search journey
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, idx) => {
          const Icon = feature.icon;

          return (
            <div
              key={idx}
              className="group relative p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-white/30 transition duration-300 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden"
            >
              
              {/* Hover Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition duration-300 rounded-2xl`}
              ></div>

              {/* Icon */}
              <div
                className={`mb-4 p-3 w-fit rounded-xl bg-gradient-to-br ${feature.color} shadow-lg shadow-purple-500/30 group-hover:scale-110 transition duration-300`}
              >
                <Icon size={24} className="text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-300 transition duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Bottom line animation */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.color} transition-all duration-300`}           ></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
