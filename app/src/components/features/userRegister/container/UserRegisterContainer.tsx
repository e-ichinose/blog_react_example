import React from 'react';
import UserRegisterPresenter from '../presenter/UserRegisterPresenter';
import { AuthProvider } from '../../../../lib/auth';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

export const UserRegisterContainer: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient} >
      <AuthProvider>
        <UserRegisterPresenter />;
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default UserRegisterContainer;
