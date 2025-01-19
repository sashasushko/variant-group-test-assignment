import React from "react";
import { Link } from "@tanstack/react-router";
import { useCoverLetters } from "../contexts/CoverLetterContext";
import CoverLetterList from "../components/CoverLetterList";
import ProgressIndicator from "../components/ProgressIndicator";

const HomePage: React.FC = () => {
  const { coverLetters } = useCoverLetters();

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Cover Letters</h2>
        <Link to="/generator">Create Cover Letter</Link>
      </div>
      <CoverLetterList />
      <ProgressIndicator total={5} current={Math.min(coverLetters.length, 5)} />
    </div>
  );
};

export default HomePage;
