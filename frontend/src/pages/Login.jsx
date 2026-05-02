import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiMail, FiLock, FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    try {
      // API call will go here
      console.log("Login attempt:", formData);
      // TODO: Replace with actual API endpoint
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white flex items-center justify-center px-4 overflow-hidden">
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full top-0 left-0 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-indigo-500/15 blur-3xl rounded-full bottom-0 right-0 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-10"></div>

      <div className="relative z-10 w-full max-w-md">
        
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition duration-300"
        >
          ← Back to Home
        </Link>

        {/* Card */}
        <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/20">
          
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
            <p className="text-gray-400">Sign in to access your AI Career dashboard</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-400 text-sm">!</span>
              </div>
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-3 text-gray-500 pointer-events-none" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:bg-white/10 focus:outline-none transition duration-300 text-white placeholder-gray-500"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-3 text-gray-500 pointer-events-none" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:bg-white/10 focus:outline-none transition duration-300 text-white placeholder-gray-500"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-300 transition duration-300"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-gray-300 transition">
                <input type="checkbox" className="w-4 h-4 rounded bg-white/10 border border-white/20" />
                Remember me
              </label>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-medium transition">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? "Signing in..." : "Sign In"}
              {!loading && <FiArrowRight size={18} />}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Sign up link */}
          <p className="text-center text-gray-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-purple-400 hover:text-purple-300 font-semibold transition">
              Create one
            </Link>
          </p>
        </div>

        {/* Footer text */}
        <p className="text-center text-gray-500 text-xs mt-6">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
