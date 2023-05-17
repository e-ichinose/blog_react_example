import React from 'react';
// import { useArticles } from '../../../../api';
import ArticleListPresenter from '../presenter/ArticleListPresenter';

export const ArticleListContainer: React.FC = () => {
  // const useQuery = useArticles();
  // console.log(useQuery);
  return <ArticleListPresenter />;
};

export default ArticleListContainer;
