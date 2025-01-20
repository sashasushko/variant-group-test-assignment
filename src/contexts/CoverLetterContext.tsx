import React, { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";

interface CoverLetter {
  id: string;
  content: string;
}

interface CoverLetterActionsContextType {
  addCoverLetter: (content: string) => void;
  deleteCoverLetter: (id: string) => void;
}

const CoverLetterDataContext = createContext<CoverLetter[] | undefined>(
  undefined,
);

const CoverLetterActionsContext = createContext<
  CoverLetterActionsContextType | undefined
>(undefined);

export const useCoverLetterData = () => {
  const context = useContext(CoverLetterDataContext);
  if (!context) {
    throw new Error(
      "useCoverLetterData must be used within a CoverLetterProvider",
    );
  }
  return context;
};

export const useCoverLetterActions = () => {
  const context = useContext(CoverLetterActionsContext);
  if (!context) {
    throw new Error(
      "useCoverLetterActions must be used within a CoverLetterProvider",
    );
  }
  return context;
};

export const CoverLetterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [coverLetters, setCoverLetters] = useState<CoverLetter[]>(() => {
    const storedCoverLetters = localStorage.getItem("coverLetters");
    return storedCoverLetters
      ? (JSON.parse(storedCoverLetters) as CoverLetter[])
      : [];
  });

  React.useEffect(() => {
    localStorage.setItem("coverLetters", JSON.stringify(coverLetters));
  }, [coverLetters]);

  const addCoverLetter = (content: string) => {
    const newCoverLetter: CoverLetter = {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      id: nanoid(),
      content,
    };
    setCoverLetters((prev) => [...prev, newCoverLetter]);
  };

  const deleteCoverLetter = (id: string) => {
    setCoverLetters((prev) => prev.filter((cl) => cl.id !== id));
  };

  return (
    <CoverLetterDataContext.Provider value={coverLetters}>
      <CoverLetterActionsContext.Provider
        value={{ addCoverLetter, deleteCoverLetter }}
      >
        {children}
      </CoverLetterActionsContext.Provider>
    </CoverLetterDataContext.Provider>
  );
};
