import Axios from 'axios';
import { API_URL } from '../../common/config';

export default Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
