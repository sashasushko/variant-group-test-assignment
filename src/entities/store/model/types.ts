export interface CoverLetter {
  id: string;
  content: string;
}

export interface CoverLetterActionsContextType {
  addCoverLetter: (content: string) => void;
  deleteCoverLetter: (id: string) => void;
}
