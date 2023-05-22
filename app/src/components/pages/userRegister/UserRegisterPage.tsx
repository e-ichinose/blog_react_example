import React from 'react';
import { Layout } from '../../ui';
import { UserRegisterContainer } from '../../features/userRegister/container/UserRegisterContainer';

export const UserRegisterPage: React.FC = () => {
  return (
    <Layout title="新規登録ページ">
      <UserRegisterContainer />
    </Layout>
  );
};

export default UserRegisterPage;
