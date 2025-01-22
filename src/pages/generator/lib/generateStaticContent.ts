import { FormData } from "@/features/letter-generator";

export const generateStaticContent = (formData: FormData): string => {
  return `Dear ${formData.company} Team,

I am writing to express my interest in the ${formData.jobTitle} position.

My experience in the realm combined with my skills in ${formData.skills} make me a strong candidate for this role.

${formData.additionalDetails}

I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.

Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.`;
};
