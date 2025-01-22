export interface OpenAiApiResponse {
  id: string;
  choices: Array<{
    index: number;
    message: {
      role: "assistant" | "user" | "system";
      content: string;
    };
  }>;
}
