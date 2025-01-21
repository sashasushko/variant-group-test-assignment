import React from "react";

import styles from "./Preview.module.css";
import { useCoverLetterData } from "@/entities/store";

const placeholder = "Your personalized job application will appear here...";

interface PreviewProps {
  showPreview: boolean;
}

export const Preview: React.FC<PreviewProps> = ({ showPreview }) => {
  const coverLetters = useCoverLetterData();

  return (
    <div className={styles.container}>
      {showPreview && coverLetters.length > 0
        ? coverLetters[0].content
        : placeholder}
    </div>
  );
};
