import React, { useState } from "react";
import { useCoverLetterActions } from "@/entities/store";
import { Form, Preview, type FormData } from "@/features/letter-generator";

import styles from "./GeneratorPage.module.css";
import { GeneratorStatus } from "@/shared/model";

export const GeneratorPage: React.FC = () => {
  const [status, setStatus] = useState<GeneratorStatus>("pending");

  const { addCoverLetter } = useCoverLetterActions();

  const handleGenerate = (formData: FormData) => {
    addCoverLetter("content");
    setStatus("pending");
  };

  return (
    <div className={styles.container}>
      <Form status={status} onGenerate={handleGenerate} />
      <Preview status={status} />
    </div>
  );
};
