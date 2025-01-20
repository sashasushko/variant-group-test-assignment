import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import AppHeader from "../components/AppHeader";
import CallToAction from "../components/CallToAction";

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
