import React from 'react';
import { Layout } from '../../ui';
import { ArticleListContainer } from '../../features';

export const TopPage: React.FC = () => {
  return (
    <Layout title="トップページ">
      <ArticleListContainer />
    </Layout>
  );
};

export default TopPage;
