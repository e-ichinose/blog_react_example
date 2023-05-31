import { axios } from '../../lib/axios';
import { AuthUser } from '../../common/type';

export const getUser = (): Promise<AuthUser> => {
  return axios.get('/api/user/me');
};
