import React, { useState } from "react";
import { useCoverLetterActions } from "@/entities/store";
import { Form, Preview } from "@/features/letter-generator";

import styles from "./GeneratorPage.module.css";

export const GeneratorPage: React.FC = () => {
  const [isPreview, setIsPreview] = useState(false);

  const { addCoverLetter } = useCoverLetterActions();

  const handleGenerate = (content: string) => {
    addCoverLetter(content);
    setIsPreview(true);
  };

  return (
    <div className={styles.container}>
      <Form onGenerate={handleGenerate} />
      <Preview show={isPreview} />
    </div>
  );
};
