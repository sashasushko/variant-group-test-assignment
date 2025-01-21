import { memo } from "react";
import clsx from "clsx";
import { useCoverLetterData } from "@/entities/store";
import { GeneratorStatus } from "@/shared/model";

import styles from "./Preview.module.css";

const placeholder = "Your personalized job application will appear here...";

interface PreviewProps {
  status?: GeneratorStatus;
}

export const Preview = memo(({ status = "initial" }: PreviewProps) => {
  const coverLetters = useCoverLetterData();

  return (
    <div
      className={clsx(styles.container, status === "pending" && styles.pending)}
    >
      {status === "repeated" && coverLetters.length > 0 ? (
        coverLetters[0].content
      ) : status === "pending" ? (
        <span className={styles.ball} />
      ) : (
        placeholder
      )}
    </div>
  );
});

Preview.displayName = "Preview";
