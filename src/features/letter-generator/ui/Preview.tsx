import { forwardRef, memo } from "react";
import clsx from "clsx";
import { useCoverLetterData } from "@/entities/store";
import { CopyToClipboardButton } from "@/shared/ui";

import styles from "./Preview.module.css";

const placeholder = "Your personalized job application will appear here...";

interface PreviewProps {
  loading: boolean;
  isFirstRequest: boolean;
  error: string | null;
}

export const Preview = memo(
  forwardRef<HTMLDivElement, PreviewProps>(
    ({ loading, isFirstRequest, error }, ref) => {
      const coverLetters = useCoverLetterData();

      const lastGeneratedLetter = coverLetters[0];

      return (
        <div ref={ref} className={styles.container}>
          <div className={clsx(styles.element, loading && styles.pending)}>
            {loading ? (
              <span className={styles.ball} />
            ) : isFirstRequest || coverLetters.length === 0 ? (
              placeholder
            ) : (
              <>
                <div>{lastGeneratedLetter?.content}</div>
                <CopyToClipboardButton
                  className={styles.control}
                  textToCopy={lastGeneratedLetter?.content}
                />
              </>
            )}
          </div>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      );
    },
  ),
);

Preview.displayName = "Preview";
