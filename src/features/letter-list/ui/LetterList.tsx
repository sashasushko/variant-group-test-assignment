import { useCoverLetterData } from "@/entities/store";
import { LetterListItem } from "./LetterListItem";

import styles from "./LetterList.module.css";

export const LetterList = () => {
  const coverLetters = useCoverLetterData();

  return (
    <section className={styles.container}>
      {coverLetters.map((letter) => (
        <LetterListItem key={letter.id} letter={letter} />
      ))}
    </section>
  );
};
