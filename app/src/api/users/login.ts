import { axios } from '../../lib/axios';
import { UserResponse } from '../../common/type';

export interface LoginCredentialsDTO {
  email: string;
  password: string;
}

export const loginWithEmailAndPassword = (data: LoginCredentialsDTO): Promise<UserResponse> => {
  return axios.post('/api/user/login', data);
};
