import React from "react";

function About() {
  return (
    <div className="min-h-screen px-6 py-12 bg-base-200 text-base-content">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center mb-10">About CVPro</h1>

        {/* 🔹 Project Overview */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🔹 Project Overview</h2>
          <p className="mb-2">
            CVPro is an AI-powered resume builder that helps users generate professional resumes based on a simple description or by manually filling a form.
          </p>
          <p className="mb-2">
            This project is ideal for students, job seekers, and professionals who need a quick, personalized, and well-structured resume.
          </p>
          <p>
            It addresses the problem of spending hours formatting resumes by allowing users to generate one in seconds, saving time and improving quality.
          </p>
        </section>

        {/* 🔹 Purpose or Mission */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🔹 Purpose or Mission</h2>
          <p className="mb-2">
            CVPro was created to simplify the resume-building process and give everyone—from beginners to experts—a professional-looking CV instantly.
          </p>
          <p>
            The goal is to empower users with the tools to present themselves effectively without requiring design skills or resume writing experience.
          </p>
        </section>

        {/* 🔹 Key Features */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🔹 Key Features</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>AI-powered resume generation from a personal description</li>
            <li>Customizable form-based resume builder</li>
            <li>Instant preview and printable/downloadable format</li>
            <li>Ability to edit, generate new, or print resumes</li>
          </ul>
        </section>

        {/* 🔹 Tech Stack */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🔹 Tech Stack</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Frontend:</strong> ReactJS, TailwindCSS, DaisyUI</li>
            <li><strong>State Management:</strong> React Hook Form</li>
            <li><strong>AI Integration:</strong> DeepSeek API (DeepSeek R1)</li>
            <li><strong>Notifications:</strong> react-toastify</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
