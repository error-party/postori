import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mail/compose")({
  component: RouteComponent,
});

function RouteComponent() {
  return <h1>Compose Page</h1>;
}
