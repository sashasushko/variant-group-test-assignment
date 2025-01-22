import { FormData } from "../model/types";

export function combineTitle(formData: FormData) {
  if (formData.jobTitle.trim() && formData.company.trim()) {
    return `${formData.jobTitle}, ${formData.company}`;
  }

  if (formData.jobTitle.trim() || formData.company.trim()) {
    return formData.jobTitle || formData.company;
  }

  return "New application";
}
