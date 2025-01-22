import { memo, useCallback } from "react";
import { CoverLetter, useCoverLetterActions } from "@/entities/store";
import { copyToClipboard } from "@/shared/lib";
import Trash from "@/shared/assets/trash.svg?react";
import Copy from "@/shared/assets/copy.svg?react";

import styles from "./LetterListItem.module.css";

export const LetterListItem = memo(({ letter }: { letter: CoverLetter }) => {
  const { deleteCoverLetter } = useCoverLetterActions();

  const handleCopy = useCallback(() => {
    void copyToClipboard(letter.content);
  }, [letter.content]);

  const handleDelete = useCallback(() => {
    deleteCoverLetter(letter.id);
  }, [deleteCoverLetter, letter.id]);

  return (
    <article className={styles.element}>
      <p className={styles.content}>
        {letter.content.replace(/(\r?\n){2,}/g, "\n")}
      </p>
      <footer className={styles.footer}>
        <button className={styles.control} type="button" onClick={handleDelete}>
          <Trash width={20} height={20} />
          <span>Delete</span>
        </button>
        <button className={styles.control} type="button" onClick={handleCopy}>
          <span>Copy to clipboard</span>
          <Copy width={20} height={20} />
        </button>
      </footer>
    </article>
  );
});

LetterListItem.displayName = "LetterListItem";
