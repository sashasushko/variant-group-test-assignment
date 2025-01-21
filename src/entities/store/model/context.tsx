import { createContext } from "react";
import { CoverLetter, CoverLetterActionsContextType } from "./types";

export const CoverLetterDataContext = createContext<CoverLetter[] | undefined>(
  undefined,
);

export const CoverLetterActionsContext = createContext<
  CoverLetterActionsContextType | undefined
>(undefined);
