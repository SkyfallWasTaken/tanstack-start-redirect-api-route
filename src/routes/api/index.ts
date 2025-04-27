import { createAPIFileRoute } from "@tanstack/react-start/api";

export const APIRoute = createAPIFileRoute("/api")({
  GET: () => {
    return new Response(null, {
      status: 301,
      headers: { Location: "/" },
    });
  },
});
