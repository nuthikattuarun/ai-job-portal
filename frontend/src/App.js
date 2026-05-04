import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ResumeAnalyzer from "./pages/ResumeAnalyzer"; 
import Applications from "./pages/Applications"; 
import Profile from "./pages/Profile";
import RecruiterDashboard from "./pages/RecruterDashboard";
import PostJob from "./pages/PostJob";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
        <Route path="/post-job" element={<PostJob />} />    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
