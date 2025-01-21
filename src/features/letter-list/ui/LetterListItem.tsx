import { memo, useCallback } from "react";
import { CoverLetter, useCoverLetterActions } from "@/entities/store";
import { copyToClipboard } from "@/shared/lib";

export const LetterListItem = memo(({ letter }: { letter: CoverLetter }) => {
  const { deleteCoverLetter } = useCoverLetterActions();

  const handleCopy = useCallback(() => {
    copyToClipboard(letter.content);
  }, [letter.content]);

  const handleDelete = useCallback(() => {
    deleteCoverLetter(letter.id);
  }, [deleteCoverLetter, letter.id]);

  return (
    <article>
      <header>
        <h3>Cover Letter</h3>
      </header>
      <div>
        <p>{letter.content}</p>
      </div>
      <footer>
        <button type="button" onClick={handleCopy}>
          Copy to Clipboard
        </button>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </footer>
    </article>
  );
});

LetterListItem.displayName = "LetterListItem";
