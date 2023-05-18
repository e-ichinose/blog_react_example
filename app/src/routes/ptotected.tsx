import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { lazyImport } from '../common/utils/lazyImport';
import { URLPath } from '../common/constants';
import { CenteredCircularProgress, Layout } from '../components/ui';

const { TopPage } = lazyImport(() => import('../components/pages'), 'TopPage');

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
    path: URLPath.HOME,
    element: <App />,
    children: [{ path: URLPath.HOME, element: <TopPage /> }],
  },
];
