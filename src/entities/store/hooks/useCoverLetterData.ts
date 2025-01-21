import { useContext } from "react";
import { CoverLetterDataContext } from "../model/context";

export const useCoverLetterData = () => {
  const context = useContext(CoverLetterDataContext);
  if (!context) {
    throw new Error(
      "useCoverLetterData must be used within a CoverLetterProvider",
    );
  }
  return context;
};
