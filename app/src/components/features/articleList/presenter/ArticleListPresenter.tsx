import React from 'react';
import { Article } from '@/common/type';

interface ArticleListPresenterProps {
  articles?: Article[];
}

const ArticleListPresenter: React.FC<ArticleListPresenterProps> = ({ articles }) => {
  return (
    <>
      <div>記事一覧</div>
    </>
  );
};

export default ArticleListPresenter;
