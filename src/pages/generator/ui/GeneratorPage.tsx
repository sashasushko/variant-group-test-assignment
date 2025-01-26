import React, { useCallback, useEffect } from "react";
import { useCoverLetterActions } from "@/entities/store";
import {
  Form,
  Preview,
  type GeneratorFormData,
} from "@/features/letter-generator";
import { useCoverLetterGenerator } from "../hooks/useCoverLetterGenerator";

import styles from "./GeneratorPage.module.css";

export const GeneratorPage: React.FC = () => {
  const { addCoverLetter } = useCoverLetterActions();

  const { generateLetter, generatedLetter, loading, error, isFirstRequest } =
    useCoverLetterGenerator();

  useEffect(() => {
    if (generatedLetter !== null) {
      addCoverLetter(generatedLetter);
    }
  }, [addCoverLetter, generatedLetter]);

  const handleSubmit = useCallback(
    (formData: GeneratorFormData) => {
      void generateLetter(formData);
    },
    [generateLetter],
  );

  return (
    <div className={styles.container}>
      <Form
        loading={loading}
        isFirstRequest={isFirstRequest}
        onSubmit={handleSubmit}
      />
      <Preview
        loading={loading}
        isFirstRequest={isFirstRequest}
        error={error}
      />
    </div>
  );
};
