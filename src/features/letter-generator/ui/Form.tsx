import React, { memo, useCallback, useMemo, useState } from "react";
import clsx from "clsx";
import { Button, Input } from "@/shared/ui";
import { type GeneratorFormData } from "../model/types";
import { combineTitle } from "../lib/combineTitle";

import styles from "./Form.module.css";

interface FormProps {
  loading: boolean;
  isFirstRequest: boolean;
  onSubmit: (formData: GeneratorFormData) => void;
}

const initialData: GeneratorFormData = {
  jobTitle: "",
  company: "",
  skills: "",
  additionalDetails: "",
};

export const Form = memo(({ loading, isFirstRequest, onSubmit }: FormProps) => {
  const [formData, setFormData] = useState<GeneratorFormData>(initialData);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
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
            (formData.jobTitle.trim() || formData.company.trim()) &&
              styles.active,
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
          variant={isFirstRequest ? "default" : "outline"}
          icon={loading ? "loading" : isFirstRequest ? void 0 : "repeat"}
          disabled={hasEmptyFields}
          pending={loading}
        >
          {loading ? null : isFirstRequest ? "Generate Now" : "Try Again"}
        </Button>
      </form>
    </div>
  );
});

Form.displayName = "Form";
