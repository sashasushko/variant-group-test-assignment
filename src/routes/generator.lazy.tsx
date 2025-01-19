import { createLazyFileRoute } from "@tanstack/react-router";
import GeneratorPage from "../pages/GeneratorPage";

export const Route = createLazyFileRoute("/generator")({
  component: GeneratorPage,
});
