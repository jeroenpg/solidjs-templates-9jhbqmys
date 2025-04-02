import { createRouter as createTanStackRouter } from '@tanstack/solid-router';
import { routeTree } from './routeTree.gen';
import { hydrate, QueryClient } from '@tanstack/solid-query';
import {
  dehydrate as dehydrateTanstack
} from "@tanstack/solid-query";

export function createRouter() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        experimental_prefetchInRender: true,
        staleTime: 1000,
      }
    }
  });
  
  const router = createTanStackRouter({
    routeTree,
    context: {
      queryClient
    },
    defaultPreload: 'intent',
    scrollRestoration: true,
    hydrate: (dehydrated) => {
      console.log("hydrate", dehydrated);
      hydrate(queryClient, dehydrated.queryCache);
    },
    dehydrate: () => {
      return {
        queryCache: dehydrateTanstack(queryClient)
      };
    }
  })

  return router
}

declare module '@tanstack/solid-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
