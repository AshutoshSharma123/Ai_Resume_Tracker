import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ATS Tracker" },
    { name: "description", content: "Customise your resume for your dream job!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Welcome to ATS Tracker</h1>
          <h2>
            Customise your resume for your dream job and get an AI-powered
            feedback
          </h2>
        </div>
      </section>

      {/* ✅ Correct conditional rendering */}
      {resumes.length > 0 ? (
        <div className="resumes-section">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      ) : (
        <p className="text-dark-200 text-center py-8">
          No resumes available yet.
        </p>
      )}
    </main>
  );
}
