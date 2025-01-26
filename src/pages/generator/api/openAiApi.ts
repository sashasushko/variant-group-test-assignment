import { GeneratorFormData } from "@/features/letter-generator";
import { ApiResponse } from "../model/types";

export const generateCoverLetterWithChatGpt = async (
  formData: GeneratorFormData,
  previousLetter: string | null,
): Promise<string> => {
  const response = await fetch(import.meta.env.VITE_API_ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formData, previousLetter }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate cover letter");
  }

  const data = (await response.json()) as ApiResponse;

  return data.coverLetter.trim();
};
