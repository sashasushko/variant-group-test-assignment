import { FormData } from "@/features/letter-generator";
import { OpenAiApiResponse } from "../model/types";

export const generateCoverLetterWithChatGpt = async (
  formData: FormData,
  previousLetter: string | null,
): Promise<string> => {
  const messages = previousLetter
    ? [
        {
          role: "system",
          content:
            "You are a helpful assistant that generates professional cover letters. The response should be no more than 500 characters and contain only the text of the cover letter. The letter will be sent via email. Do not use [placeholders] or similar. Use only the information I will provide as a basis. Except [Your Name] at the end.",
        },
        {
          role: "user",
          content: `Please refine the following cover letter: ${previousLetter}`,
        },
      ]
    : [
        {
          role: "system",
          content:
            "You are a helpful assistant that generates professional cover letters. The response should be no more than 500 characters and contain only the text of the cover letter. The letter will be sent via email. Do not use [placeholders] or similar. Use only the information I will provide as a basis. Except [Your Name] at the end.",
        },
        {
          role: "user",
          content: `Create a cover letter for me based on the following information:
Job Title: ${formData.jobTitle}
Company: ${formData.company}
My skills: ${formData.skills}
Additional details about me: ${formData.additionalDetails}`,
        },
      ];

  const response = await fetch(import.meta.env.VITE_API_ENDPOINT as string, {
    method: "POST",
    headers:
      import.meta.env.MODE === "development"
        ? {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY as string}`,
            "Content-Type": "application/json",
          }
        : {
            "Content-Type": "application/json",
          },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: messages,
      max_tokens: 500,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate cover letter with ChatGPT");
  }

  const data = (await response.json()) as OpenAiApiResponse;

  return data.choices[0].message.content.trim();
};
