import { FormData } from "../model/types";

export function combineTitle(formData: FormData) {
  if (formData.jobTitle && formData.company) {
    return `${formData.jobTitle}, ${formData.company}`;
  }

  if (formData.jobTitle || formData.company) {
    return formData.jobTitle || formData.company;
  }

  return "New application";
}
