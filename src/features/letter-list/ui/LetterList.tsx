import { useCoverLetterData } from "@/entities/store";
import { LetterListItem } from "./LetterListItem";

export const LetterList = () => {
  const coverLetters = useCoverLetterData();

  return (
    <section>
      {coverLetters.map((letter) => (
        <LetterListItem key={letter.id} letter={letter} />
      ))}
    </section>
  );
};
