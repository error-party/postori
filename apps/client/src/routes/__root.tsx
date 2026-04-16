import { createRootRoute } from "@tanstack/react-router";
import { PlainLayout } from "@/layouts/PlainLayout";

const RootLayout = () => <PlainLayout />;

export const Route = createRootRoute({ component: RootLayout });
