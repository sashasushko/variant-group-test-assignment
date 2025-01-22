import { FormData } from "@/features/letter-generator";
import DOMPurify from "dompurify";

const cleanData = (input: string) => {
  let cleanedInput = input.trim();
  cleanedInput = cleanedInput.replace(/\s+/g, " ");
  return DOMPurify.sanitize(cleanedInput);
};

export const prepareFormData = (formData: FormData): FormData => {
  return {
    jobTitle: cleanData(formData.jobTitle),
    company: cleanData(formData.company),
    skills: cleanData(formData.skills),
    additionalDetails: cleanData(formData.additionalDetails),
  };
};
