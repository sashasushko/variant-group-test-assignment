import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { AppHeader } from "@/app/layout";
import { CallToAction } from "@/widgets/call-to-action";

export const Route = createRootRoute({
  component: () => (
    <div className="wrapper">
      <AppHeader />
      <Outlet />
      <CallToAction />
      <ScrollRestoration />
      <TanStackRouterDevtools />
    </div>
  ),
});
