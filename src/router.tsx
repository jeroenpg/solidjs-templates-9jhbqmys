import { createRouter as createTanStackRouter } from '@tanstack/solid-router';
import { routeTree } from './routeTree.gen';
import { hydrate, QueryClient } from '@tanstack/solid-query';
import { dehydrate as dehydrateTanstack } from '@tanstack/solid-query';
// import { NotFound } from './components/NotFound'

export function createRouter() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        experimental_prefetchInRender: true,
        staleTime: 5000,
      },
    },
  });

  const router = createTanStackRouter({
    routeTree,
    context: {
      queryClient,
    },
    defaultPreload: 'intent',
    defaultErrorComponent: () => {
      return <div>Error</div>;
    },
    scrollRestoration: true,
    hydrate: (dehydrated) => {
      hydrate(queryClient, dehydrated.queryCache);
    },
    dehydrate: () => {
      return {
        queryCache: dehydrateTanstack(queryClient),
      };
    },
  });

  return router;
}

declare module '@tanstack/solid-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
