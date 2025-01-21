import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { AppHeader } from "@/app/layout";
import { CallToAction } from "@/widgets/call-to-action";

export const Route = createRootRoute({
  component: () => (
    <div className="container">
      <AppHeader />
      <Outlet />
      <CallToAction />
      <TanStackRouterDevtools />
    </div>
  ),
});
