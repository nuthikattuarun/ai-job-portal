import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [error, setError] = useState(null); // ✅ fixed

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/jobs/${id}/`) // ✅ fixed quotes
      .then(res => res.json())
      .then(data => setJob(data))
      .catch(err => {
        console.log(err);
        setError("Failed to load job");
      });
  }, [id]); // ✅ only one useEffect

    const handleApply = () => {
  fetch("http://127.0.0.1:8000/api/apply/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      job: id,
      name: "Arun",
      email: "test@gmail.com",
      resume: "My resume",
    }),
  })
    .then(res => res.json())
    .then(data => alert("Applied successfully"))
    .catch(err => console.log(err));
};


  if (error) {
    return <div className="text-red-500 p-10">{error}</div>;
  }

  if (!job) {
    return <div className="text-white p-10">Loading...</div>;
  }


  return (
    <div className="bg-[#0f172a] text-white min-h-screen">
      <Navbar />

      <div className="p-10">
        <h1 className="text-3xl font-bold">{job.title}</h1>
        <p className="text-gray-400">{job.company}</p>
        <p className="text-gray-400">{job.location}</p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Description</h2>
          <p>{job.description}</p>
        </div>

        <button
  onClick={handleApply}
  className="mt-4 bg-blue-500 px-4 py-2 rounded"
>
  Apply Now
</button>
      </div>
    </div>
  );
}
