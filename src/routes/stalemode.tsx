import { queryOptions } from "@tanstack/solid-query";
import { createFileRoute } from "@tanstack/solid-router";

let recordTime: Date | null = null;
const queryKeys = queryOptions({
  queryKey: ["FOO_BAR"],
  queryFn: async () => {
    if(!recordTime) {
      console.log("First time queryFn");
    } else {
      console.log("Subsequent queryFn", new Date().getTime() - recordTime.getTime());
    }
    recordTime = new Date();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return recordTime;
  }
});

export const Route = createFileRoute("/stalemode")({
  loader: async (route) => {
    const meData = await route.context.queryClient.fetchQuery({
      ...queryKeys,
      staleTime: 60000
    });

    console.log(meData);
  },
  component: RouteComponent
});

function RouteComponent() {
  return (
    <main>
      Stale mode
    </main>
  );
}
