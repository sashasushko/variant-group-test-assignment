import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";

import { AppHeader } from "@/app/layout";
import { CallToAction } from "@/widgets/call-to-action";
import React, { Suspense } from "react";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      );

export const Route = createRootRoute({
  component: () => (
    <div className="wrapper">
      <AppHeader />
      <Outlet />
      <CallToAction />
      <ScrollRestoration />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </div>
  ),
});
