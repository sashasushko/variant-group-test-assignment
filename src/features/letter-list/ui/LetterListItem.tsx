import { memo, useCallback } from "react";
import { CoverLetter, useCoverLetterActions } from "@/entities/store";
import Trash from "@/shared/assets/trash.svg?react";
import { CopyToClipboardButton } from "@/shared/ui";

import styles from "./LetterListItem.module.css";

export const LetterListItem = memo(({ letter }: { letter: CoverLetter }) => {
  const { deleteCoverLetter } = useCoverLetterActions();

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
        <CopyToClipboardButton textToCopy={letter.content} />
      </footer>
    </article>
  );
});

LetterListItem.displayName = "LetterListItem";
