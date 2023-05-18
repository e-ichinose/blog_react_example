import { initReactQueryAuth } from 'react-query-auth';

import {
  loginWithEmailAndPassword,
  LoginCredentialsDTO,
  getUser,
  RegisterCredentialsDTO,
  registerWithEmailAndPassword,
} from '../api';
import { User, UserResponse } from '../common/type';
import storage from '../common/utils/storage';
import { CenteredCircularProgress } from '../components/ui';

async function handleUserResponse(data: UserResponse) {
  const { id, username, token } = data;
  storage.setToken(token);
  return { id, username };
}

async function loadUser() {
  if (storage.getToken()) {
    const data = await getUser();
    return data;
  }
  return null;
}

async function loginFn(data: LoginCredentialsDTO) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data: RegisterCredentialsDTO) {
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
  LoaderComponent() {
    return <CenteredCircularProgress />;
  },
};

export const { useAuth } = initReactQueryAuth<
  User | null,
  unknown,
  LoginCredentialsDTO,
  RegisterCredentialsDTO
>(authConfig);
