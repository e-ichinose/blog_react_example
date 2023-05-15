import React from 'react';
import { Layout } from '@/components/ui';
import { ArticleListContainer } from '@/components/features';

export const Top: React.FC = () => {
  return (
    <Layout title="トップページ">
      <ArticleListContainer />
    </Layout>
  );
};

export default Top;
