import React, { createContext, useContext, useState } from "react";

interface CoverLetter {
  id: string;
  jobTitle: string;
  company: string;
  skills: string;
  additionalDetails: string;
}

interface CoverLetterContextType {
  coverLetters: CoverLetter[];
  addCoverLetter: (coverLetter: Omit<CoverLetter, "id">) => void;
  deleteCoverLetter: (id: string) => void;
}

const CoverLetterContext = createContext<CoverLetterContextType | undefined>(
  undefined,
);

export const useCoverLetters = () => {
  const context = useContext(CoverLetterContext);
  if (!context) {
    throw new Error(
      "useCoverLetters must be used within a CoverLetterProvider",
    );
  }
  return context;
};

export const CoverLetterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [coverLetters, setCoverLetters] = useState<CoverLetter[]>([]);

  const addCoverLetter = (coverLetter: Omit<CoverLetter, "id">) => {
    const newCoverLetter = { ...coverLetter, id: Date.now().toString() };
    setCoverLetters((prev) => [...prev, newCoverLetter]);
  };

  const deleteCoverLetter = (id: string) => {
    setCoverLetters((prev) => prev.filter((cl) => cl.id !== id));
  };

  return (
    <CoverLetterContext.Provider
      value={{ coverLetters, addCoverLetter, deleteCoverLetter }}
    >
      {children}
    </CoverLetterContext.Provider>
  );
};
