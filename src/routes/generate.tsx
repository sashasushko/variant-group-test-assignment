import { createFileRoute } from "@tanstack/react-router";
import { GeneratorPage } from "@/pages/generator";

export const Route = createFileRoute("/generate")({
  component: GeneratorPage,
});
