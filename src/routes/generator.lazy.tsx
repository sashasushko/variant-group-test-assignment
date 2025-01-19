import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/generator")({
  component: Generator,
});

function Generator() {
  return <div className="p-2">Hello from Generator!</div>;
}
