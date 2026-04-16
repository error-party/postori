import { Outlet } from "@tanstack/react-router";
import { ErrorBoundary } from "react-error-boundary";
import { AppSidebar } from "@/components/app-sidebar";
import ErrorFallback, { logError } from "@/components/ErrorFallback";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function MailLayout() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "200px",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <main className="w-full flex">
        <ErrorBoundary fallback={<ErrorFallback />} onError={logError}>
          <Outlet />
        </ErrorBoundary>
      </main>
    </SidebarProvider>
  );
}
