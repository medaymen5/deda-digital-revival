import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy deda.tn address — keeps old links and search results working.
export const Route = createFileRoute("/about-us")({
  beforeLoad: () => {
    throw redirect({ to: "/story", statusCode: 301 });
  },
});
