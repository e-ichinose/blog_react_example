import React from 'react';
import Header from '../header/Header';
import DocumentMeta from 'react-document-meta';

interface LayoutProps {
  children?: JSX.Element;
  title?: string;
}
export const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'ブログ記事サイト',
}: LayoutProps) => {
  return (
    <DocumentMeta title={title}>
      <Header />
      {children}
    </DocumentMeta>
  );
};
export default Layout;
