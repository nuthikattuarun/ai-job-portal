import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiArrowRight, FiEye, FiEyeOff, FiCheck } from "react-icons/fi";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      // API call will go here
      console.log("Signup attempt:", { ...formData, confirmPassword: undefined });
      // TODO: Replace with actual API endpoint
      navigate("/login");
    } catch (err) {
      setError(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const passwordStrength = formData.password.length >= 8 ? "strong" : formData.password.length >= 6 ? "medium" : "weak";

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white flex items-center justify-center px-4 overflow-hidden py-12">
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full top-0 right-0 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-indigo-500/15 blur-3xl rounded-full bottom-0 left-0 animate-pulse" style={{ animationDelay: "1s" }}></div>
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
            <h2 className="text-3xl font-bold mb-2">Create Account</h2>
            <p className="text-gray-400">Join AI Career and discover your perfect role</p>
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
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Full Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <FiUser className="absolute left-3 top-3 text-gray-500 pointer-events-none" size={20} />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:bg-white/10 focus:outline-none transition duration-300 text-white placeholder-gray-500"
                  disabled={loading}
                />
              </div>
            </div>

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
              
              {/* Password strength indicator */}
              {formData.password && (
                <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      passwordStrength === "strong"
                        ? "w-full bg-green-500"
                        : passwordStrength === "medium"
                        ? "w-2/3 bg-yellow-500"
                        : "w-1/3 bg-red-500"
                    }`}
                  ></div>
                </div>
              )}
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-3 text-gray-500 pointer-events-none" size={20} />
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:bg-white/10 focus:outline-none transition duration-300 text-white placeholder-gray-500"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-300 transition duration-300"
                >
                  {showConfirm ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
                {formData.password && formData.confirmPassword === formData.password && (
                  <FiCheck className="absolute right-10 top-3 text-green-500" size={20} />
                )}
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 cursor-pointer text-gray-400 hover:text-gray-300 transition text-sm">
              <input
                type="checkbox"
                className="w-4 h-4 rounded bg-white/10 border border-white/20 mt-0.5"
              />
              <span>
                I agree to the Terms of Service and Privacy Policy
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? "Creating Account..." : "Create Account"}
              {!loading && <FiArrowRight size={18} />}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Login link */}
          <p className="text-center text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-400 hover:text-purple-300 font-semibold transition">
              Sign in
            </Link>
          </p>
        </div>

        {/* Footer text */}
        <p className="text-center text-gray-500 text-xs mt-6">
          We'll never share your data. Read our privacy policy.
        </p>
      </div>
    </div>
  );
}
