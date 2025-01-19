import React from "react";
import { useCoverLetters } from "../contexts/CoverLetterContext";

const CoverLetterList: React.FC = () => {
  const { coverLetters, deleteCoverLetter } = useCoverLetters();

  const copyToClipboard = (text: string) => {
    void navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-4">
      {coverLetters.map((letter) => (
        <article key={letter.id}>
          <header>
            <h3>
              {letter.jobTitle} at {letter.company}
            </h3>
          </header>
          <div>
            <p>
              <strong>Skills:</strong> {letter.skills}
            </p>
            <p>
              <strong>Additional Details:</strong> {letter.additionalDetails}
            </p>
          </div>
          <footer className="flex justify-between">
            <button
              type="button"
              onClick={() =>
                copyToClipboard(`
Dear Hiring Manager,

I am writing to express my strong interest in the ${letter.jobTitle} position at ${letter.company}. With my skills in ${letter.skills}, I believe I would be a valuable addition to your team.

${letter.additionalDetails}

Thank you for your consideration. I look forward to the opportunity to discuss how I can contribute to ${letter.company}'s success.

Sincerely,
[Your Name]
            `)
              }
            >
              Copy to Clipboard
            </button>
            <button type="button" onClick={() => deleteCoverLetter(letter.id)}>
              Delete
            </button>
          </footer>
        </article>
      ))}
    </div>
  );
};

export default CoverLetterList;
