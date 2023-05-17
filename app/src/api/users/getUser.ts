import { axios } from '../../lib/http';
import { AuthUser } from '../../common/type';

export const getUser = (): Promise<AuthUser> => {
  return axios.get('/auth/me');
};
