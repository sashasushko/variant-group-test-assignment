import React from "react";
import { useNavigate } from "@tanstack/react-router";
import { useCoverLetterActions } from "@/entities/store";
import { LetterGenerator } from "@/features/letter-generator";

export const GeneratorPage: React.FC = () => {
  const navigate = useNavigate();
  const { addCoverLetter } = useCoverLetterActions();

  const handleGenerate = (content: string) => {
    addCoverLetter(content);
    void navigate({ to: "/" });
  };

  return <LetterGenerator onGenerate={handleGenerate} />;
};
