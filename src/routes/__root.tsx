import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import {
  Outlet,
  createRootRouteWithContext, useRouter
} from "@tanstack/solid-router";
import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools';
import { SolidQueryDevtools } from "../components/solid-query-devtools/solid-query-devtools";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({  
  component: RootComponent,
  errorComponent: () => <div>Error</div>,
  notFoundComponent: () => <div>Not found</div>,
});

function RootComponent() {
  const router = useRouter();
  return (
    <>
      <QueryClientProvider client={router.options.context.queryClient}>
        <Outlet />        
        <SolidQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
      </QueryClientProvider>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
