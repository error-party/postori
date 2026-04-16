import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>SignIn Page</h1>
    </div>
  );
}
