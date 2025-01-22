import { memo, useCallback } from "react";
import clsx from "clsx";
import { useCoverLetterData } from "@/entities/store";
import { copyToClipboard } from "@/shared/lib";
import Copy from "@/shared/assets/copy.svg?react";

import styles from "./Preview.module.css";

const placeholder = "Your personalized job application will appear here...";

interface PreviewProps {
  loading: boolean;
  isFirstRequest: boolean;
  error: string | null;
}

export const Preview = memo(
  ({ loading, isFirstRequest, error }: PreviewProps) => {
    const coverLetters = useCoverLetterData();

    const lastGeneratedLetter = coverLetters[0];

    const handleCopy = useCallback(() => {
      void copyToClipboard(lastGeneratedLetter?.content);
    }, [lastGeneratedLetter?.content]);

    return (
      <div className={styles.container}>
        <div className={clsx(styles.element, loading && styles.pending)}>
          {loading ? (
            <span className={styles.ball} />
          ) : isFirstRequest || coverLetters.length === 0 ? (
            placeholder
          ) : (
            <>
              <div>{lastGeneratedLetter?.content}</div>
              <button
                className={styles.control}
                type="button"
                onClick={handleCopy}
              >
                <span>Copy to clipboard</span>
                <Copy width={20} height={20} />
              </button>
            </>
          )}
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  },
);

Preview.displayName = "Preview";
