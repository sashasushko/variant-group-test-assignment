import { memo } from "react";
import clsx from "clsx";
import { useCoverLetterData } from "@/entities/store";

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

    return (
      <div className={styles.container}>
        <div className={clsx(styles.element, loading && styles.pending)}>
          {loading ? (
            <span className={styles.ball} />
          ) : isFirstRequest || coverLetters.length === 0 ? (
            placeholder
          ) : (
            coverLetters[0].content
          )}
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  },
);

Preview.displayName = "Preview";
