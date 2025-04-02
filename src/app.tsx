import { router } from './router';
import { RouterProvider } from '@tanstack/solid-router';
import { QueryClientProvider } from '@tanstack/solid-query';

export default function App() {
  return (
    <QueryClientProvider client={router.options.context.queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
