import { useContext } from "react";
import { CoverLetterActionsContext } from "../model/context";

export const useCoverLetterActions = () => {
  const context = useContext(CoverLetterActionsContext);
  if (!context) {
    throw new Error(
      "useCoverLetterActions must be used within a CoverLetterProvider",
    );
  }
  return context;
};
