import * as React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';

import { CenteredCircularProgress, Layout } from '../components/ui';
import { queryClient } from '../lib/react-query';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <Layout>
          <CenteredCircularProgress />
        </Layout>
      }
    >
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
        <Router>{children}</Router>
      </QueryClientProvider>
    </React.Suspense>
  );
};
