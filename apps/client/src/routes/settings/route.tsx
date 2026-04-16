import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div>Hello "/settings"!</div>
      <Outlet />
    </>
  );
}
