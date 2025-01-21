import React, { useCallback, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { Button, Input } from "@/shared/ui";
import { type FormData } from "../model/types";
import { combineTitle } from "../lib/combineTitle";

import styles from "./Form.module.css";
import { generateContent } from "../lib/generateContent";

interface FormProps {
  onGenerate: (content: string) => void;
}

const initialData: FormData = {
  jobTitle: "",
  company: "",
  skills: "",
  additionalDetails: "",
};

export const Form: React.FC<FormProps> = ({ onGenerate }) => {
  const [formData, setFormData] = useState<FormData>(initialData);

  const geneartedOnceRef = useRef(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!geneartedOnceRef.current) {
      geneartedOnceRef.current = true;
    }

    onGenerate(generateContent(formData));
  };

  const hasEmptyFields = useMemo(() => {
    return Object.values(formData).some(
      (value: string) => value.trim().length === 0,
    );
  }, [formData]);

  const title = useMemo(() => {
    return combineTitle(formData);
  }, [formData]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2
          className={clsx(
            styles.title,
            (formData.jobTitle || formData.company) && styles.active,
          )}
        >
          {title}
        </h2>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          id="jobTitle"
          label="Job title"
          placeholder="Product manager"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />
        <Input
          id="company"
          label="Company"
          placeholder="Apple"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <Input
          className={styles.wideControl}
          id="skills"
          label="I am good at..."
          placeholder="HTML, CSS and doing things in time"
          value={formData.skills}
          onChange={handleChange}
          required
        />
        <Input
          className={styles.wideControl}
          as="textarea"
          id="additionalDetails"
          label="Additional details"
          placeholder="Describe why you are a great fit or paste your bio"
          value={formData.additionalDetails}
          onChange={handleChange}
          rows={10}
          limit={1200}
          required
        />
        <Button
          className={styles.wideControl}
          type="submit"
          variant={geneartedOnceRef.current ? "outline" : "default"}
          icon={geneartedOnceRef.current ? "repeat" : void 0}
          disabled={hasEmptyFields}
        >
          {geneartedOnceRef.current ? "Try Again" : "Generate Now"}
        </Button>
      </form>
    </div>
  );
};
