import React, { useCallback, useEffect, useRef } from "react";
import { useCoverLetterActions } from "@/entities/store";
import {
  Form,
  Preview,
  type GeneratorFormData,
} from "@/features/letter-generator";
import { useCoverLetterGenerator } from "../hooks/useCoverLetterGenerator";

import styles from "./GeneratorPage.module.css";

export const GeneratorPage: React.FC = () => {
  const previewRef = useRef<HTMLDivElement>(null);

  const { addCoverLetter } = useCoverLetterActions();

  const { generateLetter, generatedLetter, loading, error, isFirstRequest } =
    useCoverLetterGenerator();

  useEffect(() => {
    if (generatedLetter !== null) {
      addCoverLetter(generatedLetter);

      if (
        previewRef.current &&
        window.matchMedia("(max-width: 767px)").matches
      ) {
        previewRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
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
        ref={previewRef}
        loading={loading}
        isFirstRequest={isFirstRequest}
        error={error}
      />
    </div>
  );
};
