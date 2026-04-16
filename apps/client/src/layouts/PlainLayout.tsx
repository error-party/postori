import { Outlet } from "@tanstack/react-router";

export function PlainLayout() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <Outlet />
    </main>
  );
}
