import { axios } from '../../lib/http';
import { UserResponse } from '../../common/type';

export interface RegisterCredentialsDTO {
  username: string;
  email: string;
  password: string;
}

export const registerWithEmailAndPassword = (
  data: RegisterCredentialsDTO
): Promise<UserResponse> => {
  return axios.post('/auth/register', data);
};
