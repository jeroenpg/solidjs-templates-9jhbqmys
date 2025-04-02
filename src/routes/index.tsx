import { createFileRoute, useNavigate } from "@tanstack/solid-router";

export const Route = createFileRoute("/")({
  component: RouteComponent
});

function RouteComponent() {
  const navigate = useNavigate();
  return (
    <main>
      <button onClick={() => {
        navigate({
          to: "/stalemode"
        })
      }}>
        Client Side Redirect
      </button>
      <button onClick={() => {
        window.location.href = "/stalemode";
      }}>
        Server Side Redirect
      </button>
    </main>
  );
}
