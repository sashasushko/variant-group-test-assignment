import { CoverLetter } from "../model/types";

export const getCoverLettersFromLocalStorage = (): CoverLetter[] => {
  const storedCoverLetters = localStorage.getItem("coverLetters");
  return storedCoverLetters
    ? (JSON.parse(storedCoverLetters) as CoverLetter[])
    : [];
};

export const saveCoverLettersToLocalStorage = (coverLetters: CoverLetter[]) => {
  localStorage.setItem("coverLetters", JSON.stringify(coverLetters));
};
