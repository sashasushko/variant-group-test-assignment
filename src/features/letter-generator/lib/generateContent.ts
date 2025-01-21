import { type FormData } from "../model/types";

export function generateContent(formData: FormData): string {
  const { jobTitle, company, skills, additionalDetails } = formData;

  return `Dear ${company.trim()} Team,

I am writing to express my interest in the ${jobTitle.trim()} position.

My experience in the realm combined with my skills in ${skills.trim()} make me a strong candidate for this role.

${additionalDetails.trim()}

I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.

Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.`;
}
