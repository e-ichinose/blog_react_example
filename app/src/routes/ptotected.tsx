import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { lazyImport } from '../common/utils/lazyImport';
import { CenteredCircularProgress, Layout } from '../components/ui';

const { Top } = lazyImport(() => import('../components/pages'), 'Top');

const App = () => {
  return (
    <Suspense
      fallback={
        <Layout>
          <CenteredCircularProgress />
        </Layout>
      }
    >
      <Outlet />
    </Suspense>
  );
};

export const protectedRoutes = [
  {
    path: '/',
    element: <App />,
    children: [{ path: '/', element: <Top /> }],
  },
];
