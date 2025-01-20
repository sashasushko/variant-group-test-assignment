import React from "react";
import {
  useCoverLetterData,
  useCoverLetterActions,
} from "../contexts/CoverLetterContext";
import clsx from "clsx";

const CoverLetterList: React.FC<{ className?: string }> = ({ className }) => {
  const coverLetters = useCoverLetterData();
  const { deleteCoverLetter } = useCoverLetterActions();

  const copyToClipboard = (text: string) => {
    void navigator.clipboard.writeText(text);
  };

  return (
    <section className={clsx(className)}>
      {coverLetters.map((letter) => (
        <article key={letter.id}>
          <header>
            <h3>Cover Letter</h3>
          </header>
          <div>
            <p>{letter.content}</p>
          </div>
          <footer className="flex justify-between">
            <button
              type="button"
              onClick={() => copyToClipboard(letter.content)}
            >
              Copy to Clipboard
            </button>
            <button type="button" onClick={() => deleteCoverLetter(letter.id)}>
              Delete
            </button>
          </footer>
        </article>
      ))}
    </section>
  );
};

export default CoverLetterList;
