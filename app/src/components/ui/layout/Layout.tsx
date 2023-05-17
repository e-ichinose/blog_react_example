import React from 'react';
import DocumentMeta from 'react-document-meta';

import Header from '../header/Header';
import styled from 'styled-components';

const Body = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'ブログ記事サイト',
}: LayoutProps) => {
  return (
    <DocumentMeta title={title}>
      <Header />
      <Body>{children}</Body>
    </DocumentMeta>
  );
};
export default Layout;
