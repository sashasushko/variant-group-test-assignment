import React from "react";
import { useNavigate } from "@tanstack/react-router";
import CoverLetterGenerator from "../components/CoverLetterGenerator";
import { useCoverLetterActions } from "../contexts/CoverLetterContext";

const GeneratorPage: React.FC = () => {
  const navigate = useNavigate();
  const { addCoverLetter } = useCoverLetterActions();

  const handleGenerate = (content: string) => {
    addCoverLetter(content);
    void navigate({ to: "/" });
  };

  return <CoverLetterGenerator onGenerate={handleGenerate} />;
};

export default GeneratorPage;
