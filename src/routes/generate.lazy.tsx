import { createLazyFileRoute } from "@tanstack/react-router";
import { GeneratorPage } from "@/pages/generator";

export const Route = createLazyFileRoute("/generate")({
  component: GeneratorPage,
});
