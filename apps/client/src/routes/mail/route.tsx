import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/mail")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/mail/__root"!
      <Outlet />
    </div>
  );
}
