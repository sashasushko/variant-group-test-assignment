import React, { useState, useEffect, useCallback } from "react";
import { nanoid } from "nanoid";
import {
  CoverLetterDataContext,
  CoverLetterActionsContext,
} from "../model/context";
import { CoverLetter } from "../model/types";
import {
  getCoverLettersFromLocalStorage,
  saveCoverLettersToLocalStorage,
} from "../api/localStorage";

export const CoverLetterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [coverLetters, setCoverLetters] = useState<CoverLetter[]>(() => {
    return getCoverLettersFromLocalStorage();
  });

  useEffect(() => {
    saveCoverLettersToLocalStorage(coverLetters);
  }, [coverLetters]);

  const addCoverLetter = useCallback((content: string) => {
    const newCoverLetter: CoverLetter = {
      id: nanoid(),
      content,
    };
    setCoverLetters((prev) => [...prev, newCoverLetter]);
  }, []);

  const deleteCoverLetter = useCallback((id: string) => {
    setCoverLetters((prev) => prev.filter((cl) => cl.id !== id));
  }, []);

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
