import { useState } from "react";
import { GeneratorFormData } from "@/features/letter-generator";
import { prepareFormData } from "../lib/prepareFormData";
import { generateCoverLetterWithChatGpt } from "../api/openAiApi";
import { generateStaticContent } from "../lib/generateStaticContent";

export const useCoverLetterGenerator = () => {
  const [previousFormData, setPreviousFormData] =
    useState<GeneratorFormData | null>(null);
  const [generatedLetter, setGeneratedLetter] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFirstRequest, setIsFirstRequest] = useState(true);

  const generateLetter = async (formData: GeneratorFormData) => {
    const preparedFormData = prepareFormData(formData);
    const previousLetter =
      JSON.stringify(preparedFormData) === JSON.stringify(previousFormData)
        ? generatedLetter
        : null;

    setLoading(true);
    setError(null);

    try {
      const letter = await generateCoverLetterWithChatGpt(
        preparedFormData,
        previousLetter,
      );
      setGeneratedLetter(letter);
      setPreviousFormData(preparedFormData);
    } catch {
      const staticLetter = generateStaticContent(preparedFormData);
      setGeneratedLetter(staticLetter);
      setError(
        "Failed to generate the letter with ChatGPT. Using default content.",
      );
    } finally {
      if (isFirstRequest) {
        setIsFirstRequest(false);
      }
      setLoading(false);
    }
  };

  return {
    generateLetter,
    generatedLetter,
    loading,
    error,
    isFirstRequest,
  };
};
